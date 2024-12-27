// =======================
//   AuthControllerForAuthor Page
// =======================

const Author = require("../models/author.models.js");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const fs = require("fs");
const {
  uploadOnCloudinaryForAuthor,
  delete_Image_from_Cloudinary,
} = require("../utils/Cloudinary.js");
const { CountryMobileCodeData } = require("../utils/CountryMobileCodeData.js");
const { nanoid } = require("nanoid");
const {
  forgotPasswordVerification,
} = require("../utils/ForgotPasswordVerification.js");

// Secure Password
const securePassword = async (password) => {
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    return passwordHash;
  } catch (error) {
    console.log(
      "This is the error of authControllerForAuthor > securePassword",
      error
    );
    return;
  }
};

// Signup
const register = async (req, res) => {
  try {
    res.render("registerForAuthor");
  } catch (error) {
    console.log(
      "This is the error of authControllerForAuthor > register",
      error
    );
  }
};

// Insert Author
const insertAuthor = async (req, res) => {
  try {
    if (!req.body && !req.files) return null;

    const {
      name,
      email,
      username,
      tel,
      password,
      terms_conditions_and_privacy_policy,
    } = req.body;

    if (
      [
        name,
        email,
        username,
        tel,
        password,
        terms_conditions_and_privacy_policy,
      ].some((field) => {
        return field?.trim() === "";
      })
    ) {
      return res.status(500).json({ error: "All fields are required!" });
    }
    // console.log(name, email, username, req.files);

    if (!(username.length >= 5)) {
      return res
        .status(500)
        .json({ error: "Username must be greater than 5 letters!" });
    }

    if (!(name.length >= 5)) {
      return res
        .status(500)
        .json({ error: "Name must be greater than 5 letters!" });
    }

    if (!(password.length >= 8)) {
      return res.status(500).json({
        error:
          "Password must be greater than or equal to 8 letters and must have mix of alphanumeric, special characters!",
      });
    }

    const filenameLocalPath = req.files?.profile_image[0]?.path;

    if (!filenameLocalPath) {
      return res.status(500).json({ error: "Image is required!" });
    }

    if (!tel.includes("-")) {
      return res.status(500).json({
        error: "Please give '-' between Country Code and your mobile number.",
      });
    }

    const mobileNumber_with_country_code = tel.split("-").map((item) => item);

    const country_code = mobileNumber_with_country_code[0];
    const mobile_number = mobileNumber_with_country_code[1];
    const tested_mobile_number = Number(mobile_number);

    if (mobile_number.length !== 10) {
      return res.status(500).json({ error: "Invalid mobile number!" });
    }

    if (isNaN(tested_mobile_number)) {
      return res.status(500).json({ error: "Invalid mobile number!" });
    }

    const mobileCountryCode = CountryMobileCodeData.filter((item) => {
      return country_code === item.dial_code;
    });

    if (!mobileCountryCode) {
      return res.status(500).json({ error: "Invalid Country Code!" });
    }

    const authorData = await Author.findOne({
      $or: [{ username }, { email }],
    });

    if (authorData) {
      return res
        .status(500)
        .json({ error: "Author already exists. Please Login!" });
    }

    const filename = await uploadOnCloudinaryForAuthor(filenameLocalPath);

    const hashedPassword = await securePassword(password);
    const newAuthorData = await Author.create({
      name: name,
      email: email,
      username: username,
      tel: tested_mobile_number,
      country_code: country_code,
      password: hashedPassword,
      profile_image: filename.secure_url,
      cloudinary_image_public_id: filename.public_id,
      terms_conditions_and_privacy_policy: terms_conditions_and_privacy_policy,
    });

    newAuthorData.save();

    res.status(200).json({ message: "Author is registered successfully!" });
  } catch (error) {
    console.log(
      "This is the error of authControllerForAuthorNew.js > insertUser > newAuthorData",
      error
    );
    res.status(500).json({ error: "Author registration has failed!" });
  }
};

// Login
const loginLoad = async (req, res) => {
  try {
    res.render("loginForAuthor");
  } catch (error) {
    console.log(
      "This is the error of authControllerForAuthor > loginLoad",
      error
    );
  }
};

// Verify Login
const verifyLogin = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const authorData = await Author.findOne({ username: username });
    // console.log("Author Data is: ", authorData);

    if (authorData) {
      const passwordMatch = await bcrypt.compare(password, authorData.password);
      // console.log("Password matching: ", passwordMatch);

      if (passwordMatch) {
        req.session.author_id = authorData._id;
        res.redirect("/api/profileForAuthor");
      } else {
        res.render("loginForAuthor", {
          message: "Email/password is incorrect!",
        });
      }
    } else {
      res.render("loginForAuthor", { message: "Email/password is incorrect!" });
    }
  } catch (error) {
    console.log(
      "This is the error of authControllerForAuthor > verifyLogin",
      error
    );
  }
};

// Author Profile Get Method
const loadProfile = async (req, res) => {
  try {
    const authorData = await Author.findById({ _id: req.session.author_id });
    res.render("profileForAuthor", { user: authorData });
  } catch (error) {
    console.log(
      "This is the error of authControllerForAuthor > loadProfile",
      error
    );
  }
};

// Settings Get Method
const loadSettings = async (req, res) => {
  try {
    const authorData = await Author.findById({ _id: req.session.author_id });
    res.render("settingsForAuthor", { user: authorData });
  } catch (error) {
    console.log(
      "This is the error of authControllerForAuthor > loadSettings",
      error
    );
  }
};

// Author Logout
const authorLogout = async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
        return res.status(500).send("Internal Server Error");
      }
      res.clearCookie('connect.sid', { path: '/' });
      res.redirect('/api/loginForAuthor');
    });
  } catch (error) {
    console.log(
      "This is the error of authControllerForAuthor > authorLogout",
      error
    );
    return null;
  }
};

// Delete Author Account
const deleteUser = async (req, res) => {
  try {
    Author.findByIdAndDelete({ _id: req.session.author_id }, req.body).then(
      (user) => {
        delete_Image_from_Cloudinary(user.cloudinary_image_public_id);
        req.session.destroy();
        res.redirect("/api/registerForAuthor");
      }
    );
    return null;
  } catch (error) {
    console.log(
      "This is the error of authControllerForAuthor > deleteUser",
      error
    );
    return null;
  }
};

// Get request for forgot password
const gettingClientOTP_on_mobile = async (req, res) => {
  try {
    return res.render("forgotPasswordForAuthor");
  } catch (error) {
    return;
  }
};

// Post request Client's Email-id for forgot password
const verifyClientOTP_on_mobile = async (req, res) => {
  try {
    if (!req.body) return null;
    const { mobileInputData } = req.body;

    const trimmed_mobileInputData = mobileInputData.trim();

    if (!trimmed_mobileInputData.includes("-")) {
      return res.render("forgotPasswordForAuthor", {
        message: "Please give '-' between Country Code and your mobile number.",
      });
    }

    const mobileNumber_with_country_code = trimmed_mobileInputData
      .split("-")
      .map((item) => item);

    const country_code = mobileNumber_with_country_code[0];
    const mobile_number = mobileNumber_with_country_code[1];
    const tested_mobile_number = Number(mobile_number);

    if (mobile_number.length !== 10) {
      return res.render("forgotPasswordForAuthor", {
        message: "Invalid mobile number!",
      });
    }

    if (isNaN(tested_mobile_number)) {
      return res.render("forgotPasswordForAuthor", {
        message: "Invalid mobile number!",
      });
    }

    const mobileCountryCode = CountryMobileCodeData.filter((item) => {
      return country_code === item.dial_code;
    });

    if (!mobileCountryCode) {
      return res.render("forgotPasswordForAuthor", {
        message: "Invalid Country Code!",
      });
    }

    const foundUser = await Author.findOne({
      tel: tested_mobile_number,
    }).select("-password -username");

    const verification_id = nanoid(4);

    if (foundUser) {
      const user_mobile_number = foundUser.country_code + foundUser.tel;

      let otp = verification_id;
      // console.log(otp);

      req.session.authorAccount = foundUser;
      req.session.otp_checker_author = otp;

      forgotPasswordVerification(otp, user_mobile_number);

      return res.redirect("/api/accountVerificationForAuthor");
    } else {
      return res.render("forgotPasswordForAuthor", {
        message: "User not found!",
      });
    }
  } catch (error) {
    return res.render("forgotPasswordForAuthor", {
      message: "OTP verification failed!",
    });
  }
};

// Get accountVerification.ejs page
const fillVerificationCodeGetMethod = async (req, res) => {
  try {
    return res.render("accountVerificationForAuthor");
  } catch (error) {
    return;
  }
};

// Post accountVerification.ejs page
const fillVerificationCodePostMethod = async (req, res) => {
  try {
    if (!req.body) return null;

    const codeOne = req.body.codeOne;
    const codeTwo = req.body.codeTwo;
    const codeThree = req.body.codeThree;
    const codeFour = req.body.codeFour;

    let codeFromAccounVerificationPage =
      codeOne.trim() + codeTwo.trim() + codeThree.trim() + codeFour.trim();

    if (!(req.session.otp_checker_author === codeFromAccounVerificationPage)) {
      return res.render("accountVerificationForAuthor", {
        message: "Wrong OTP! ",
      });
    }

    return res.redirect("/api/setPasswordForAuthor");
  } catch (error) {
    return res.render("accountVerificationForAuthor", {
      message: "OTP Verification failed!",
    });
  }
};

// Get setPassword.ejs page
const setPasswordGetMethod = async (req, res) => {
  try {
    res.render("setPasswordForAuthor");
  } catch (error) {
    return;
  }
};

const setPasswordPostMethod = async (req, res) => {
  try {
    if (!req.body) return null;

    const { firstPassword, secondPassword } = req.body;

    if (!(firstPassword.length >= 7)) {
      return res.render("setPasswordForAuthor", {
        message: "First Password must have atleast 7 characters!",
      });
    }

    if (!(secondPassword.length >= 7)) {
      return res.render("setPasswordForAuthor", {
        message: "Second Password must have atleast 7 characters!",
      });
    }

    // Letter testing
    const regExp = /[a-zA-Z]/g;
    const has_firstPasswordLetter = regExp.test(firstPassword);
    if (!has_firstPasswordLetter) {
      return res.render("setPasswordForAuthor", {
        message: "First Password must include a letter!",
      });
    }

    const has_secondPasswordLetter = regExp.test(secondPassword);
    if (!has_secondPasswordLetter) {
      return res.render("setPasswordForAuthor", {
        message: "First Password must include a letter!",
      });
    }

    // Number testing
    const regex = /\d/;
    const has_firstPasswordNumber = regex.test(firstPassword);
    if (!has_firstPasswordNumber) {
      return res.render("setPasswordForAuthor", {
        message: "First Password must include a number!",
      });
    }

    const has_secondPasswordNumber = regex.test(secondPassword);
    if (!has_secondPasswordNumber) {
      return res.render("setPasswordForAuthor", {
        message: "Second Password must include a number!",
      });
    }

    // Special Character testing
    const specialChars = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
    const has_firstPasswordSpecialCharacter = specialChars.test(firstPassword);
    if (!has_firstPasswordSpecialCharacter) {
      return res.render("setPasswordForAuthor", {
        message: "Password must include an special character!",
      });
    }

    const has_secondPasswordSpecialCharacter =
      specialChars.test(secondPassword);
    if (!has_secondPasswordSpecialCharacter) {
      return res.render("setPasswordForAuthor", {
        message: "Password must include an special character!",
      });
    }

    if (!(firstPassword === secondPassword)) {
      return res.render("setPasswordForAuthor", {
        message: "Passwords are not matching!",
      });
    }

    let authorAccount = req.session.authorAccount;

    const hashedResetPassword = await securePassword(secondPassword);

    await Author.findOneAndUpdate(
      { tel: authorAccount.tel },
      { $set: { password: hashedResetPassword } },
      {
        upsert: true,
        new: true,
      }
    );

    return res.redirect("/api/passwordUpdatedForAuthor");
  } catch (error) {
    return res.render("setPasswordForAuthor", {
      message: "Setting Password failed!",
    });
  }
};

const passwordMatchingGetMethod = async (req, res) => {
  try {
    return res.render("passwordUpdatedForAuthor");
  } catch (error) {
    return;
  }
};

const resendPassword = async (req, res) => {
  try {
    if (!req.body) return null;

    const { resendPassaword } = req.body;
    if (resendPassaword.trim()) {
      const authorAccount = req.session.authorAccount;
      const user_mobile_number = authorAccount.country_code + authorAccount.tel;

      const verification_id = nanoid(4);

      let otp = verification_id;

      req.session.otp_checker_author = otp;

      forgotPasswordVerification(otp, user_mobile_number);

      return res.render("accountVerificationForAuthor", {
        message: "Again an OTP has been sent to you!",
      });
    }
  } catch (error) {
    return res.render("forgotPasswordForAuthor", {
      message: "OTP verification failed!",
    });
  }
};

// Update Name of Author
const updateName = async (req, res) => {
  try {
    if (!req.body) return null;

    const { name } = req.body;

    await Author.findOneAndUpdate(
      { _id: req.session.author_id },
      { $set: { name: name } },
      { returnDocument: "after" }
    );

    return res.status(200).json({ message: "Name updated!" });
  } catch (error) {
    console.log("Error in authControllerForAuthor > updateName > try-catch");
    return null;
  }
};

// Update Email for author
const updateEmail = async (req, res) => {
  try {
    if (!req.body) return null;

    const { email } = req.body;

    const authorEmail = await Author.findOne({ email });

    if (authorEmail) {
      return res.json({ message: "This email is already registered!" });
    }

    await Author.findOneAndUpdate(
      { _id: req.session.author_id },
      { $set: { email: email } },
      { returnDocument: "after" }
    );
    return res.status(200).json({ message: "Email-id updated!" });
  } catch (error) {
    console.log("Error in authControllerForAuthor > updateEmail > try-catch");
    return null;
  }
};

// Update Mobile for Users
const updateMobile = async (req, res) => {
  try {
    if (!req.body) return null;

    const { mobile } = req.body;

    await Author.findOneAndUpdate(
      { _id: req.session.author_id },
      { $set: { tel: mobile } },
      { returnDocument: "after" }
    );
    return res.status(200).json({ message: "Mobile number updated!" });
  } catch (error) {
    console.log("Error in authControllerForAuthor > updateMobile > try-catch");
    return null;
  }
};

// Update Username for Member/Admin
const updateUsername = async (req, res) => {
  try {
    if (!req.body) return null;

    const { username } = req.body;

    const authorUsername = await Author.findOne({ username });

    if (authorUsername) {
      return res.json({ message: "This username is already registered!" });
    }

    await Author.findOneAndUpdate(
      { _id: req.session.author_id },
      { $set: { username: username } },
      { returnDocument: "after" }
    );
    return res.status(200).json({ message: "Username updated!" });
  } catch (error) {
    console.log(
      "Error in authControllerForMember > updateUsername > try-catch"
    );
    return null;
  }
};

// Getting the article title in order to delete the article from profile using delete button
const gettingBlogTitle = async (req, res) => {
  try {
    const blogTitle1 = req.body.blogTitle;
    const blogTitle = blogTitle1.trim();

    const result = await Author.findOneAndUpdate(
      { _id: req.session.author_id },
      {
        new: true,
        upsert: true,
        projection: { _id: 0, __v: 0 },
      }
    ).then((docs) => {
      try {
        const item = docs.writtenBlogsByAuthor.findIndex(
          (item) => item.blogTitle === blogTitle
        );

        if (item !== -1) {
          docs.writtenBlogsByAuthor.splice(item, 1);
          // save the doc
          docs.save();
        } else {
          console.log(
            "There is an error in authControllerForAuthor > blogLink > else"
          );
        }
      } catch (error) {
        console.log(
          "This is the error of authControllerForAuthor > gettingBlogTitle > try-catch ",
          error
        );
      }
    });
  } catch (error) {
    console.log(
      "This is the error of authControllerForAuthor > gettingBlogTitle ",
      error
    );
  }
};

// postBlogByAuthorPostMethod and saving the blogs written by EduWeb_Author
const postBlogByAuthorPostMethod = async (req, res) => {
  try {
    if (!req.body) return null;
    const {
      blogTitle,
      authorBlogCategory,
      blogSubCategoryValue,
      blogDescription,
      dateInput,
    } = req.body;

    const blogTitleAfterTrim = blogTitle.trim();
    const blogCategoryAfterTrim = authorBlogCategory.trim();
    const blogSubCategoryAfterTrim = blogSubCategoryValue;
    const blogDescriptionAfterTrim = blogDescription.trim();
    const publishedDateAfterTrim = dateInput.trim();

    await Author.findOne({
      _id: req.session.author_id,
    }).then((docs) => {
      try {
        // Matching user's selected ontion to the element in database
        const item = docs.writtenBlogsByAuthor.findIndex(
          (item) => item.blogTitle === blogTitleAfterTrim
        );

        if (item > -1) {
          // If there is matching item, then do nothing!
        } else {
          const blog = Author.findByIdAndUpdate(
            req.session.author_id,
            {
              $push: {
                writtenBlogsByAuthor: {
                  blogTitle: blogTitleAfterTrim,
                  blogCategory: blogCategoryAfterTrim,
                  blogSubCategory: blogSubCategoryAfterTrim,
                  blogContent: blogDescriptionAfterTrim,
                  blogPublishedDate: publishedDateAfterTrim,
                },
              },
            },
            {
              new: true,
              upsert: true,
              projection: { _id: 0, __v: 0 },
            }
          ).exec();

          // article.save() will require in future. So, please don't deleter this below line
          // blog.save();
          return res.status(200).json({ message: "File has been uploaded!" });
        }
      } catch (error) {
        return res.status(500).json({ message: "File has not been uploaded!" });
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "File has not been uploaded!" });
  }
};

const gettingAllBlogs = async (req, res) => {
  try {
    const userData = await Author.findById({ _id: req.session.author_id });
    const dataTable = await Author.find();

    res.render("blogsForAuthor", { user: userData, dataTable: dataTable });
  } catch (error) {
    console.log("This is the error of authController > gettingAllBlogs", error);
  }
};

module.exports = {
  register,
  insertAuthor,
  loginLoad,
  verifyLogin,
  loadProfile,
  loadSettings,
  authorLogout,
  deleteUser,
  gettingClientOTP_on_mobile,
  verifyClientOTP_on_mobile,
  fillVerificationCodeGetMethod,
  fillVerificationCodePostMethod,
  setPasswordGetMethod,
  setPasswordPostMethod,
  passwordMatchingGetMethod,
  resendPassword,
  updateName,
  updateEmail,
  updateMobile,
  updateUsername,
  gettingBlogTitle,
  postBlogByAuthorPostMethod,
  gettingAllBlogs,
};
