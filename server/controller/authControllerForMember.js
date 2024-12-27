// =======================
//   AuthControllerForMember Page
// =======================

const User = require("../models/user.models.js");
const Author = require("../models/author.models.js");
const Member = require("../models/member.models.js");
const ConsellingOfUser = require("../models/consellingOfUser.modals.js");
const QuestionPaper = require("../models/question_paper.models.js");
const Advertisement = require("../models/advertisement.models.js");
const College = require("../models/college.models.js");
const FrequentlyAskedQuestion = require("../models/uploadingFAQs_by_member.models.js");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
const {
  uploadOnCloudinaryFor_Question_paper,
  uploadOnCloudinaryForAds_Upload,
  uploadOnCloudinaryForMember,
  delete_Image_from_Cloudinary,
  delete_College_Cover_Image_from_Cloudinary,
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
      "This is the error of authControllerForMember > securePassword",
      error
    );
  }
};

// Signup
const register = async (req, res) => {
  try {
    res.render("registerForMember");
  } catch (error) {
    console.log(
      "This is the error of authControllerForMember > registerForMember",
      error
    );
  }
};

// Insert Member
const insertMemberFromAdmin = async (req, res) => {
  try {
    if (!req.body && !req.file) return null;

    const {
      name,
      email,
      username,
      tel,
      password,
      designation,
      terms_conditions_and_privacy_policy,
    } = req.body;

    if (
      [
        name,
        email,
        username,
        tel,
        password,
        designation,
        terms_conditions_and_privacy_policy,
      ].some((field) => {
        return field?.trim() === "";
      })
    ) {
      return res.status(500).json({ error: "All fields are required!" });
    }

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

    const userData = await Member.findOne({
      $or: [{ username }, { email }],
    });

    if (userData) {
      return res
        .status(500)
        .json({ error: "Member already exists. Please Login!" });
    }

    const filenameLocalPath = req.file?.path;

    if (!filenameLocalPath) {
      return res.status(500).json({ error: "Image is required!" });
    }

    const filename = await uploadOnCloudinaryForMember(filenameLocalPath);

    const hashedPassword = await securePassword(password);

    const newUserData = await Member.create({
      name: name,
      email: email,
      username: username,
      tel: tested_mobile_number,
      country_code: country_code,
      password: hashedPassword,
      profile_image: filename.secure_url,
      cloudinary_image_public_id: filename.public_id,
      designation: designation,
      terms_conditions_and_privacy_policy: terms_conditions_and_privacy_policy,
    });

    newUserData.save();

    res.status(200).json({ message: "Member is registered successfully!" });
  } catch (error) {
    console.log(
      "This is the error of authControllerForMember.js > insertMemberFromMainWebsite > newUserData",
      error
    );
    res.status(500).json({ error: "Member registration has failed!" });
  }
};

const insertMemberFromMainWebsite = async (req, res) => {
  try {
    if (!req.body && !req.file) return null;

    const {
      name,
      email,
      username,
      tel,
      password,
      designation,
      terms_conditions_and_privacy_policy,
    } = req.body;

    if (
      [
        name,
        email,
        username,
        tel,
        password,
        designation,
        terms_conditions_and_privacy_policy,
      ].some((field) => {
        return field?.trim() === "";
      })
    ) {
      return res.status(500).json({ error: "All fields are required!" });
    }

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

    const userData = await Member.findOne({
      $or: [{ username }, { email }],
    });

    if (userData) {
      return res
        .status(500)
        .json({ error: "Member already exists. Please Login!" });
    }

    const filenameLocalPath = req.file?.path;

    if (!filenameLocalPath) {
      return res.status(500).json({ error: "Image is required!" });
    }

    const filename = await uploadOnCloudinaryForMember(filenameLocalPath);

    const hashedPassword = await securePassword(password);

    const newUserData = await Member.create({
      name: name,
      email: email,
      username: username,
      tel: tested_mobile_number,
      country_code: country_code,
      password: hashedPassword,
      profile_image: filename.secure_url,
      cloudinary_image_public_id: filename.public_id,
      designation: designation,
      terms_conditions_and_privacy_policy: terms_conditions_and_privacy_policy,
    });

    newUserData.save();

    res.status(200).json({ message: "Member is registered successfully!" });
  } catch (error) {
    console.log(
      "This is the error of authControllerForMember.js > insertMemberFromMainWebsite > newUserData",
      error
    );
    res.status(500).json({ error: "Member registration has failed!" });
  }
};

// Login
const loginLoad = async (req, res) => {
  try {
    res.render("loginForMember");
  } catch (error) {
    console.log(
      "This is the error of authControllerForMember > loginLoad",
      error
    );
  }
};

// Verify Login for Member
const verifyLogin = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    if (username === "admin") {
      const adminData = await Member.findOne({ username: username });
      if (adminData) {
        const passwordMatch = await bcrypt.compare(
          password,
          adminData.password
        );

        if (passwordMatch) {
          req.session.admin_id = adminData._id;
          res.redirect("/api/profileForAdmin");
        } else {
          res.render("loginForMember", {
            message: "Email/password is incorrect!",
          });
        }
      } else {
        res.render("loginForMember", {
          message: "Email/password is incorrect!",
        });
      }
    } else {
      const memberData = await Member.findOne({ username: username });

      if (memberData) {
        const passwordMatch = await bcrypt.compare(
          password,
          memberData.password
        );

        if (passwordMatch) {
          req.session.member_id = memberData._id;
          res.redirect("/api/profileForMember");
        } else {
          res.render("loginForMember", {
            message: "Email/password is incorrect!",
          });
        }
      } else {
        res.render("loginForMember", {
          message: "Email/password is incorrect!",
        });
      }
    }
  } catch (error) {
    console.log(
      "This is the error of authControllerForMember > verifyLogin",
      error
    );
  }
};

// Admin Profile Get Method
const loadProfileForAdmin = async (req, res) => {
  try {
    const userData1 = await Member.findById({
      _id: req.session.admin_id,
    }).select("-password");

    const dataTableOfUser = await User.find();
    const dataTableOfAuthor = await Author.find();
    const dataTableOfMember = await Member.find();
    const dataTableOfConsellingOfUser = await ConsellingOfUser.find();
    const Question_Papers = await QuestionPaper.find();
    const dataTableOfAdvertisement = await Advertisement.find();
    const dataTableOfCollege = await College.find();

    res.render("profileForAdmin", {
      user: userData1,
      dataTableOfUser: dataTableOfUser,
      dataTableOfAuthor: dataTableOfAuthor,
      dataTableOfMember: dataTableOfMember,
      dataTableOfConsellingOfUser: dataTableOfConsellingOfUser,
      Question_Papers: Question_Papers,
      dataTableOfAdvertisement: dataTableOfAdvertisement,
      college_list: dataTableOfCollege,
    });
  } catch (error) {
    console.log(
      "This is the error of authControllerForMember > loadProfileForAdmin",
      error
    );
  }
};

// Admin Settings Get Method
const loadSettingsForAdmin = async (req, res) => {
  try {
    const memberData = await Member.findById({
      _id: req.session.admin_id,
    }).select("-password");
    res.render("settingsForAdmin", { user: memberData });
  } catch (error) {
    console.log(
      "This is the error of authControllerForMember > loadSettingsForAdmin",
      error
    );
  }
};

// Member Profile Get Method
const loadProfile = async (req, res) => {
  try {
    const memberData = await Member.findById({
      _id: req.session.member_id,
    }).select("-password");

    const dataTableOfUser = await User.find();
    const dataTableOfAuthor = await Author.find();
    const dataTableOfConsellingOfUser = await ConsellingOfUser.find();
    const Question_Papers = await QuestionPaper.find();
    const FrequentlyAskedQuestions = await FrequentlyAskedQuestion.find();
    const dataTableOfAdvertisement = await Advertisement.find();

    res.render("profileForMember", {
      user: memberData,
      dataTableOfUser: dataTableOfUser,
      dataTableOfAuthor: dataTableOfAuthor,
      dataTableOfConsellingOfUser: dataTableOfConsellingOfUser,
      Question_Papers: Question_Papers,
      FrequentlyAskedQuestions: FrequentlyAskedQuestions,
      dataTableOfAdvertisement: dataTableOfAdvertisement,
    });
  } catch (error) {
    console.log(
      "This is the error of authControllerForMember > loadProfile",
      error
    );
  }
};

// Member Settings Get Method
const loadSettings = async (req, res) => {
  try {
    const memberData = await Member.findById({ _id: req.session.member_id });
    res.render("settingsForMember", { user: memberData });
  } catch (error) {
    console.log(
      "This is the error of authControllerForMember > loadSettings",
      error
    );
  }
};

// Update Name of Admin
const updateNameForAdmin = async (req, res) => {
  try {
    if (!req.body) return null;

    const { name } = req.body;

    await Member.findOneAndUpdate(
      { _id: req.session.admin_id },
      { $set: { name: name } },
      { returnDocument: "after" }
    );

    return res.status(200).json({ message: "Name updated!" });
  } catch (error) {
    console.log(
      "Error in authControllerForMember > updateNameForAdmin > try-catch"
    );
    return null;
  }
};

// Update Mobile for Admin
const updateMobileForAdmin = async (req, res) => {
  try {
    if (!req.body) return null;

    const { mobile } = req.body;

    await Member.findOneAndUpdate(
      { _id: req.session.admin_id },
      { $set: { tel: mobile } },
      { returnDocument: "after" }
    );
    return res.status(200).json({ message: "Mobile number updated!" });
  } catch (error) {
    console.log(
      "Error in authControllerForMember > updateMobileForAdmin > try-catch"
    );
    return null;
  }
};

// Update Email for Admin
const updateEmailForAdmin = async (req, res) => {
  try {
    if (!req.body) return null;

    const { email } = req.body;

    const memberEmail = await Member.findOne({ email });

    if (memberEmail) {
      return res.json({ message: "This email is already registered!" });
    }

    await Member.findOneAndUpdate(
      { _id: req.session.admin_id },
      { $set: { email: email } },
      { returnDocument: "after" }
    );
    return res.status(200).json({ message: "Email-id updated!" });
  } catch (error) {
    console.log(
      "Error in authControllerForMember > updateEmailForAdmin > try-catch"
    );
    return null;
  }
};

// Update Username for Admin
const updateUsernameForAdmin = async (req, res) => {
  try {
    if (!req.body) return null;

    const { username } = req.body;

    const memberUsername = await Member.findOne({ username });

    if (memberUsername) {
      return res.json({ message: "This username is already registered!" });
    }

    await Member.findOneAndUpdate(
      { _id: req.session.admin_id },
      { $set: { username: username } },
      { returnDocument: "after" }
    );
    return res.status(200).json({ message: "Username updated!" });
  } catch (error) {
    console.log(
      "Error in authControllerForMember > updateUsernameForAdmin > try-catch"
    );
    return null;
  }
};

// Update Name of Member
const updateName = async (req, res) => {
  try {
    if (!req.body) return null;

    const { name } = req.body;

    await Member.findOneAndUpdate(
      { _id: req.session.member_id },
      { $set: { name: name } },
      { returnDocument: "after" }
    );

    return res.status(200).json({ message: "Name updated!" });
  } catch (error) {
    console.log("Error in authControllerForMember > updateName > try-catch");
    return null;
  }
};

// Update Mobile for Member/Admin
const updateMobile = async (req, res) => {
  try {
    if (!req.body) return null;

    const { mobile } = req.body;

    await Member.findOneAndUpdate(
      { _id: req.session.member_id },
      { $set: { tel: mobile } },
      { returnDocument: "after" }
    );
    return res.status(200).json({ message: "Mobile number updated!" });
  } catch (error) {
    console.log("Error in authControllerForMember > updateMobile > try-catch");
    return null;
  }
};

// Update Email for Member/Admin
const updateEmail = async (req, res) => {
  try {
    if (!req.body) return null;

    const { email } = req.body;

    const memberEmail = await Member.findOne({ email });

    if (memberEmail) {
      return res.json({ message: "This email is already registered!" });
    }

    await Member.findOneAndUpdate(
      { _id: req.session.member_id },
      { $set: { email: email } },
      { returnDocument: "after" }
    );
    return res.status(200).json({ message: "Email-id updated!" });
  } catch (error) {
    console.log("Error in authControllerForMember > updateEmail > try-catch");
    return null;
  }
};

// Update Username for Member/Admin
const updateUsername = async (req, res) => {
  try {
    if (!req.body) return null;

    const { username } = req.body;

    const memberUsername = await Member.findOne({ username });

    if (memberUsername) {
      return res.json({ message: "This username is already registered!" });
    }

    await Member.findOneAndUpdate(
      { _id: req.session.member_id },
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

const gettingClientOTP_on_mobile = async (req, res) => {
  try {
    res.render("forgotPasswordForMember");
  } catch (error) {
    console.log(
      "This is the error of authControllerForMember > gettingClientOTP_on_mobile",
      error
    );
    return;
  }
};

const verifyClientOTP_on_mobile = async (req, res) => {
  try {
    if (!req.body) return null;
    const { mobileInputData } = req.body;

    const trimmed_mobileInputData = mobileInputData.trim();

    if (!trimmed_mobileInputData.includes("-")) {
      return res.render("forgotPasswordForMember", {
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
      return res.render("forgotPasswordForMember", {
        message: "Invalid mobile number!",
      });
    }

    if (isNaN(tested_mobile_number)) {
      return res.render("forgotPasswordForMember", {
        message: "Invalid mobile number!",
      });
    }

    const mobileCountryCode = CountryMobileCodeData.filter((item) => {
      return country_code === item.dial_code;
    });

    if (!mobileCountryCode) {
      return res.render("forgotPasswordForMember", {
        message: "Invalid Country Code!",
      });
    }

    const foundUser = await Member.findOne({
      tel: tested_mobile_number,
    }).select("-password -username");
    const verification_id = nanoid(4);

    if (foundUser) {
      const user_mobile_number = foundUser.country_code + foundUser.tel;

      let otp = verification_id;

      req.session.memberAccount = foundUser;
      req.session.otp_checker_member = otp;

      forgotPasswordVerification(otp, user_mobile_number);

      return res.redirect("/api/accountVerificationForMember");
    } else {
      return res.render("forgotPasswordForMember", {
        message: "User not found!",
      });
    }
  } catch (error) {
    return res.render("forgotPasswordForMember", {
      message: "OTP verification failed!",
    });
  }
};

const fillVerificationCodeGetMethod = async (req, res) => {
  try {
    res.render("accountVerificationForMember");
  } catch (error) {
    return;
  }
};

const fillVerificationCodePostMethod = async (req, res) => {
  try {
    if (!req.body) return null;

    const codeOne = req.body.codeOne;
    const codeTwo = req.body.codeTwo;
    const codeThree = req.body.codeThree;
    const codeFour = req.body.codeFour;

    let codeFromAccounVerificationPage =
      codeOne.trim() + codeTwo.trim() + codeThree.trim() + codeFour.trim();

    if (!(req.session.otp_checker_member === codeFromAccounVerificationPage)) {
      return res.render("accountVerificationForMember", {
        message: "Wrong OTP! ",
      });
    }

    return res.redirect("/api/setPasswordForMember");
  } catch (error) {
    return res.render("accountVerificationForMember", {
      message: "OTP Verification failed!",
    });
  }
};

const setPasswordGetMethod = async (req, res) => {
  try {
    return res.render("setPasswordForMember");
  } catch (error) {
    console.log(
      "This is the error of authControllerForMember > setPassword",
      error
    );
    return;
  }
};

const setPasswordPostMethod = async (req, res) => {
  try {
    if (!req.body) return null;

    const { firstPassword, secondPassword } = req.body;
    if (!(firstPassword.length >= 7)) {
      return res.render("setPasswordForMember", {
        message: "First Password must have atleast 7 characters!",
      });
    }

    if (!(secondPassword.length >= 7)) {
      return res.render("setPasswordForMember", {
        message: "Second Password must have atleast 7 characters!",
      });
    }

    // Letter testing
    const regExp = /[a-zA-Z]/g;
    const has_firstPasswordLetter = regExp.test(firstPassword);
    if (!has_firstPasswordLetter) {
      return res.render("setPasswordForMember", {
        message: "First Password must include a letter!",
      });
    }

    const has_secondPasswordLetter = regExp.test(secondPassword);
    if (!has_secondPasswordLetter) {
      return res.render("setPasswordForMember", {
        message: "First Password must include a letter!",
      });
    }

    // Number testing
    const regex = /\d/;
    const has_firstPasswordNumber = regex.test(firstPassword);
    if (!has_firstPasswordNumber) {
      return res.render("setPasswordForMember", {
        message: "First Password must include a number!",
      });
    }

    const has_secondPasswordNumber = regex.test(secondPassword);
    if (!has_secondPasswordNumber) {
      return res.render("setPasswordForMember", {
        message: "Second Password must include a number!",
      });
    }

    // Special Character testing
    const specialChars = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
    const has_firstPasswordSpecialCharacter = specialChars.test(firstPassword);
    if (!has_firstPasswordSpecialCharacter) {
      return res.render("setPasswordForMember", {
        message: "Password must include an special character!",
      });
    }

    const has_secondPasswordSpecialCharacter =
      specialChars.test(secondPassword);
    if (!has_secondPasswordSpecialCharacter) {
      return res.render("setPasswordForMember", {
        message: "Password must include an special character!",
      });
    }

    if (!(firstPassword === secondPassword)) {
      return res.render("setPasswordForMember", {
        message: "Passwords are not matching!",
      });
    }

    let memberAccount = req.session.memberAccount;
    const hashedResetPassword = await securePassword(secondPassword);

    await Member.findOneAndUpdate(
      { tel: memberAccount.tel },
      { $set: { password: hashedResetPassword } },
      {
        upsert: true,
        new: true,
      }
    );
    return res.redirect("/api/passwordUpdatedForMember");
  } catch (error) {
    return res.render("forgotPasswordForMember", {
      message: "Setting Password failed!",
    });
  }
};

const passwordMatchingGetMethod = async (req, res) => {
  try {
    return res.render("passwordUpdatedForMember");
  } catch (error) {
    return;
  }
};

const resendPassword = async (req, res) => {
  try {
    if (!req.body) return null;

    const { resendPassaword } = req.body;

    if (resendPassaword.trim()) {
      const memberAccount = req.session.memberAccount;
      const user_mobile_number = memberAccount.country_code + memberAccount.tel;

      const verification_id = nanoid(4);

      let otp = verification_id;

      req.session.otp_checker_member = otp;

      forgotPasswordVerification(otp, user_mobile_number);

      return res.render("accountVerificationForMember", {
        message: "Again an OTP has been sent to you!",
      });
    }
  } catch (error) {
    return res.render("forgotPasswordForMember", {
      message: "OTP verification failed!",
    });
  }
};

// Post method for uploading Single Question Paper
const uploading_question_paper = async (req, res) => {
  try {
    if (!req.body && !req.file) return null;

    const { name, board_name, board_or_university, states_or_uts } = req.body;
    const zip_file_LocalPath = req.file?.path;

    if (!zip_file_LocalPath) {
      return res.status(500).json({ message: "Question Paper is required." });
    }

    const zip_File = await uploadOnCloudinaryFor_Question_paper(
      zip_file_LocalPath
    );

    if (!zip_File) {
      return res.status(500).json({ message: "Question Paper is required." });
    }

    const questionPaper = await QuestionPaper.create({
      name: name,
      board_name: board_name,
      question_paper: zip_File.secure_url,
      question_paper_public_id: zip_File.public_id,
      states_or_uts: states_or_uts,
      board_or_university: board_or_university,
    });

    questionPaper.save();

    return res
      .status(201)
      .json({ message: "Question Paper is successfully uploaded!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Question Paper upload has failed!" });
  }
};

// Get Question Paper
const getQuestionPaper = async (req, res) => {
  try {
    const question_papers = await QuestionPaper.find();
    return res.json(question_papers);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

// Advertisement Page
const post_Method_Of_advertisement = async (req, res) => {
  try {
    if (!req.file && !req.body) {
      return null;
    } else {
      const ads_Local_path = req.file?.path;
      const image_resolution_value = req.body?.image_resolution_value;

      if (!ads_Local_path && !image_resolution_value) {
        return res
          .status(500)
          .json({ message: "Ad image/Image resolution value is required." });
      }

      const ads_File = await uploadOnCloudinaryForAds_Upload(ads_Local_path);

      if (!ads_File) {
        return res.status(500).json({ message: "Ad image is required." });
      }

      const newAdsPhoto = await Advertisement.create({
        filename: ads_File.secure_url,
        filename_public_id: ads_File.public_id,
        image_resolution_value: image_resolution_value,
      });

      newAdsPhoto.save();
      return res
        .status(200)
        .json({ message: "Ad image is sent successfully!" });
    }
  } catch (error) {
    return res.status(500).json({ message: "It is not working!" });
  }
};

const uploading_FAQs_by_member = async (req, res) => {
  try {
    if (!req.body) return null;

    const { question, answer } = req.body;

    const newUserData = await FrequentlyAskedQuestion.create({
      question: question,
      answer: answer,
    });

    newUserData.save();

    return res.status(200).json({ message: "FAQ is uploaded successfully!" });
  } catch (error) {
    return res.status(500).json({ message: "FAQ uploading has failed!" });
  }
};

const getFAQs_by_member = async (req, res) => {
  try {
    const FrequentlyAskedQuestions = await FrequentlyAskedQuestion.find();
    return res.json(FrequentlyAskedQuestions);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const deleteFAQ_by_member = async (req, res) => {
  try {
    if (!req.body) return null;

    const { item_id } = req.body;
    const trimmed_item_id = item_id.trim();

    await FrequentlyAskedQuestion.findByIdAndDelete({ _id: trimmed_item_id });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

// sending conselling of user status to the database
const conselling_of_user_status = async (req, res) => {
  try {
    if (!req.body) return null;

    const { id_of_user, status } = req.body;

    const trimmed_id_of_user = id_of_user.trim();
    const trimmed_status = status.trim();

    await ConsellingOfUser.findOneAndUpdate(
      { _id: trimmed_id_of_user },
      { $set: { status: trimmed_status } },
      { returnDocument: "after" }
    );
    return res.status(200).json({ message: "Everything is working!" });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ message: "Something went wrong!" });
  }
};

// sending preference to the database
const college_preference = async (req, res) => {
  try {
    if (!req.body) return null;

    const { id_of_user, preference } = req.body;

    const trimmed_id_of_user = id_of_user.trim();
    const trimmed_preference = preference.trim();

    await College.findOneAndUpdate(
      { _id: trimmed_id_of_user },
      { $set: { preference: trimmed_preference } },
      { returnDocument: "after" }
    );

    return res.status(200).json({ message: "Everything is working!" });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ message: "Something went wrong!" });
  }
};

// sending preference to the database
const college_verification_process = async (req, res) => {
  try {
    if (!req.body) return null;

    const { id_of_user, verification } = req.body;

    const trimmed_id_of_user = id_of_user.trim();
    const trimmed_verification = verification.trim();

    await College.findOneAndUpdate(
      { _id: trimmed_id_of_user },
      { $set: { verification_process: trimmed_verification } },
      { returnDocument: "after" }
    );

    return res.status(200).json({ message: "Everything is working!" });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ message: "Something went wrong!" });
  }
};

const delete_College_By_Admin = async (req, res) => {
  try {
    if (!req.body) return null;
    const { College_Id } = req.body;
    const trimmed_College_Id = College_Id.trim();

    await College.findByIdAndDelete({ _id: trimmed_College_Id }, req.body).then(
      (user) => {
        delete_Image_from_Cloudinary(user.cloudinary_profile_image_public_id);
        delete_College_Cover_Image_from_Cloudinary(
          user.cloudinary_cover_image_public_id
        );
      }
    );
    return null;
  } catch (error) {
    console.log("Error: ", error);
    return null;
  }
};

// Getting Advertisement Ads
const getting_advertisement_ads = async (req, res) => {
  try {
    const ads = await Advertisement.find();

    res.json(ads);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

// Member Logout
const memberLogout = async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
        return res.status(500).send("Internal Server Error");
      }
      res.clearCookie('connect.sid', { path: '/' });
      res.redirect('/api/loginForMember');
    });
  } catch (error) {
    console.log(
      "This is the error of authControllerForMember > memberLogout",
      error
    );
    return null;
  }
};

// Admin Logout
const adminLogout = async (req, res) => {
  try {
    req.session.destroy();
    return res.redirect("/api/loginForMember");
  } catch (error) {
    console.log(
      "This is the error of authControllerForMember > memberLogout",
      error
    );
    return null;
  }
};

// Delete User by Admin
const delete_User_By_Admin = async (req, res) => {
  try {
    if (!req.body) {
      return null;
    } else {
      const userId = req.body.user_id;
      const trimmed_user_Id = userId.trim();

      await User.findByIdAndDelete({ _id: trimmed_user_Id }, req.body).then(
        (user) => {
          delete_Image_from_Cloudinary(user.cloudinary_image_public_id);
        }
      );
      return null;
    }
  } catch (error) {
    console.log(
      "This is the error of authControllerForAuthor > delete_User_By_Admin",
      error
    );
  }
};

// Delete Conselling of Users by Admin
const delete_Conselling_of_User_By_Admin = async (req, res) => {
  try {
    if (!req.body) {
      return null;
    } else {
      const Conselling_Of_User_Id = req.body.Conselling_Of_User_Id;
      const trimmed_Conselling_Of_User_Id = Conselling_Of_User_Id.trim();
      await ConsellingOfUser.findOneAndDelete({
        _id: trimmed_Conselling_Of_User_Id,
      });
    }
  } catch (error) {
    console.log(
      "This is the error of authControllerForAuthor > delete_Conselling_of_User_By_Admin",
      error
    );
  }
};

// Delete Author by Admin
const delete_Author_By_Admin = async (req, res) => {
  try {
    if (!req.body) {
      return null;
    } else {
      const Author_Id = req.body.Author_Id;
      const trimmed_Author_Id = Author_Id.trim();

      await Author.findByIdAndDelete({ _id: trimmed_Author_Id }, req.body).then(
        (user) => {
          delete_Image_from_Cloudinary(user.cloudinary_image_public_id);
        }
      );
      return null;
    }
  } catch (error) {
    console.log(
      "This is the error of authControllerForAuthor > delete_Author_By_Admin",
      error
    );
  }
};

// Delete Member by Admin
const delete_Member_By_Admin = async (req, res) => {
  try {
    if (!req.body) {
      return null;
    } else {
      const Member_Id = req.body.Member_Id;
      const trimmed_Member_Id = Member_Id.trim();

      await Member.findByIdAndDelete({ _id: trimmed_Member_Id }, req.body).then(
        (user) => {
          delete_Image_from_Cloudinary(user.cloudinary_image_public_id);
        }
      );
      return null;
    }
  } catch (error) {
    console.log(
      "This is the error of authControllerForAuthor > delete_Member_By_Admin",
      error
    );
  }
};

// Delete User by Member
const delete_User_By_Member = async (req, res) => {
  try {
    if (!req.body) {
      return null;
    } else {
      const userId = req.body.user_id;
      const trimmed_user_Id = userId.trim();

      await User.findByIdAndDelete({ _id: trimmed_user_Id }, req.body).then(
        (user) => {
          delete_Image_from_Cloudinary(user.cloudinary_image_public_id);
        }
      );
      return null;
    }
  } catch (error) {
    console.log(
      "This is the error of authControllerForAuthor > delete_User_By_Member",
      error
    );
  }
};

// Delete Conselling of Users by Member
const delete_Conselling_of_User_By_Member = async (req, res) => {
  try {
    if (!req.body) {
      return null;
    } else {
      const Conselling_Of_User_Id = req.body.Conselling_Of_User_Id;
      const trimmed_Conselling_Of_User_Id = Conselling_Of_User_Id.trim();
      await ConsellingOfUser.findOneAndDelete({
        _id: trimmed_Conselling_Of_User_Id,
      });
    }
  } catch (error) {
    console.log(
      "This is the error of authControllerForAuthor > delete_Conselling_of_User_By_Member",
      error
    );
  }
};

// Delete Author by Member
const delete_Author_By_Member = async (req, res) => {
  try {
    if (!req.body) {
      return null;
    } else {
      const Author_Id = req.body.Author_Id;
      const trimmed_Author_Id = Author_Id.trim();

      await Author.findByIdAndDelete({ _id: trimmed_Author_Id }, req.body).then(
        (user) => {
          delete_Image_from_Cloudinary(user.cloudinary_image_public_id);
        }
      );
      return null;
    }
  } catch (error) {
    console.log(
      "This is the error of authControllerForAuthor > delete_Author_By_Member",
      error
    );
  }
};

// Delete Member Account
const deleteMemberAccount = async (req, res) => {
  try {
    Member.findByIdAndDelete({ _id: req.session.member_id }, req.body).then(
      (user) => {
        delete_Image_from_Cloudinary(user.cloudinary_image_public_id);
        req.session.destroy();
        res.redirect("/api/registerForMember");
      }
    );
    return null;
  } catch (error) {
    console.log(
      "This is the error of authControllerForMember > deleteMemberAccount",
      error
    );
    return null;
  }
};

const delete_Question_paper_by_Admin = async (req, res) => {
  try {
    if (!req.body) return null;

    const { question_paper_Id } = req.body;

    const trimmed_question_paper_Id = question_paper_Id.trim();

    QuestionPaper.findByIdAndDelete(
      { _id: trimmed_question_paper_Id },
      req.body
    ).then((user) => {
      delete_Image_from_Cloudinary(user.question_paper_public_id);
    });
    return null;
  } catch (error) {
    console.log("Error: ", error);
    return null;
  }
};

const deleteAdsByAdmin = async (req, res) => {
  try {
    if (!req.body) return null;

    const { item_id } = req.body;

    const trimmed_item_id = item_id;

    Advertisement.findByIdAndDelete({ _id: trimmed_item_id }, req.body).then(
      (user) => {
        delete_Image_from_Cloudinary(user.filename_public_id);
      }
    );

    return null;
  } catch (error) {
    console.log("Error: ", error);
  }
};

module.exports = {
  register,
  insertMemberFromAdmin,
  insertMemberFromMainWebsite,
  loginLoad,
  verifyLogin,
  loadProfileForAdmin,
  loadSettingsForAdmin,
  loadProfile,
  loadSettings,
  updateNameForAdmin,
  updateMobileForAdmin,
  updateEmailForAdmin,
  updateUsernameForAdmin,
  updateName,
  updateMobile,
  updateEmail,
  updateUsername,
  gettingClientOTP_on_mobile,
  verifyClientOTP_on_mobile,
  fillVerificationCodeGetMethod,
  fillVerificationCodePostMethod,
  setPasswordGetMethod,
  setPasswordPostMethod,
  passwordMatchingGetMethod,
  resendPassword,
  uploading_question_paper,
  getQuestionPaper,
  memberLogout,
  adminLogout,
  post_Method_Of_advertisement,
  uploading_FAQs_by_member,
  getFAQs_by_member,
  deleteFAQ_by_member,
  getting_advertisement_ads,
  conselling_of_user_status,
  college_preference,
  college_verification_process,
  delete_College_By_Admin,
  delete_User_By_Admin,
  delete_Conselling_of_User_By_Admin,
  delete_Author_By_Admin,
  delete_Member_By_Admin,
  delete_User_By_Member,
  delete_Conselling_of_User_By_Member,
  delete_Author_By_Member,
  deleteMemberAccount,
  delete_Question_paper_by_Admin,
  deleteAdsByAdmin,
};
