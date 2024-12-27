// =======================
//   AuthControllerForCollege Page
// =======================

const College = require("../models/college.models.js");
const bcrypt = require("bcrypt");
const Advertisement = require("../models/advertisement.models.js");
const {
  uploadOnCloudinaryForCollegeCoverImage,
  uploadNewAndDeleteOldOnCloudinaryForCoverImage,
  uploadOnCloudinaryForCollegeProfileImage,
  uploadNewAndDeleteOldOnCloudinaryForProfileImage,
  uploadOnCloudinaryForCollegeDetailsBrochure,
  uploadNewAndDeleteOldOnCloudinaryForCollegeDetailsBrochure,
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
      "This is the error of authControllerForAuthor > securePassword",
      error
    );
    return null;
  }
};

// Signup
const register = async (req, res) => {
  try {
    res.render("registerForCollege");
    return;
  } catch (error) {
    console.log(
      "This is the error of authControllerForCollege > register",
      error
    );
    return null;
  }
};

// Insert College
const insertCollege = async (req, res) => {
  try {
    if (!req.body && !req.file) return null;

    const {
      name,
      email,
      username,
      tel,
      password,
      terms_conditions_and_privacy_policy,
    } = req.body;

    if (
      [name, username, password, terms_conditions_and_privacy_policy].some(
        (field) => {
          return field?.trim() === "";
        }
      )
    ) {
      return res.status(500).json({ error: "All fields are required!" });
    }

    if (!(name.length >= 5)) {
      return res
        .status(500)
        .json({ error: "Name must be greater than 5 letters!" });
    }

    if (!(username.length >= 5)) {
      return res
        .status(500)
        .json({ error: "Username must be greater than 5 letters!" });
    }

    if (!(password.length >= 8)) {
      return res.status(500).json({
        error:
          "Password must be greater than or equal to 8 letters and must have mix of alphanumeric, special characters!",
      });
    }

    const collegeData = await College.findOne({ username });

    if (collegeData) {
      return res
        .status(500)
        .json({ error: "College already exists. Please Login!" });
    }

    const capitalize_name = name.toUpperCase();
    const filenameLocalPath = req.file?.path;

    if (!filenameLocalPath && !tel && !email) {
      const hashedPassword = await securePassword(password);
      const newCollegeData = await College.create({
        name: capitalize_name,
        email: "",
        username: username,
        tel: "",
        country_code: "",
        password: hashedPassword,
        cover_image: "",
        cloudinary_cover_image_public_id: "",
        profile_image: "",
        cloudinary_profile_image_public_id: "",
        city: "",
        state_or_ut_name: "",
        district_name: "",
        terms_conditions_and_privacy_policy:
          terms_conditions_and_privacy_policy,
        college_short_name: "",
        institute_type: "",
        ownership: "",
        approvals: "",
        courses_offered: "",
        college_campus: "",
        college_admission: "",
        university_name: "",
        entrance_exam: "",
        college_description: "",
        college_website: "",
        engineering_rank: "",
        medical_rank: "",
        law_rank: "",
        management_rank: "",
        fashion_design_rank: "",
        pharmacy_rank: "",
        engineering_fees: "",
        management_fees: "",
        medical_fees: "",
        law_fees: "",
        fashion_design_fees: "",
        pharmacy_fees: "",
        college_details_brochure: "",
        cloudinary_college_details_brochure_public_id: "",
        college_rating: "0/5",
        latest_news_and_events: "",
        verification_process: "false",
        total_star_rating: 0,
        number_people_who_rated: 0,
      });

      newCollegeData.save();

      res.status(200).json({ message: "College is registered successfully!" });
    } else {
      if (!tel.includes("-")) {
        return res.status(500).json({
          error:
            "Please give '-' between Country Code and your mobile number.",
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

      const profile_Image = await uploadOnCloudinaryForCollegeProfileImage(
        filenameLocalPath
      );

      const hashedPassword = await securePassword(password);
      const newCollegeData = await College.create({
        name: capitalize_name,
        email: email,
        username: username,
        tel: tested_mobile_number,
        country_code: country_code,
        password: hashedPassword,
        cover_image: "",
        cloudinary_cover_image_public_id: "",
        profile_image: profile_Image.secure_url,
        cloudinary_profile_image_public_id: profile_Image.public_id,
        city: "",
        state_or_ut_name: "",
        district_name: "",
        terms_conditions_and_privacy_policy:
          terms_conditions_and_privacy_policy,
        college_short_name: "",
        institute_type: "",
        ownership: "",
        approvals: "",
        courses_offered: "",
        college_campus: "",
        college_admission: "",
        university_name: "",
        entrance_exam: "",
        college_description: "",
        college_website: "",
        engineering_rank: "",
        medical_rank: "",
        law_rank: "",
        management_rank: "",
        fashion_design_rank: "",
        pharmacy_rank: "",
        engineering_fees: "",
        management_fees: "",
        medical_fees: "",
        law_fees: "",
        fashion_design_fees: "",
        pharmacy_fees: "",
        college_details_brochure: "",
        cloudinary_college_details_brochure_public_id: "",
        college_rating: "0/5",
        latest_news_and_events: "",
        verification_process: "false",
        total_star_rating: 0,
        number_people_who_rated: 0,
      });

      newCollegeData.save();

      res.status(200).json({ message: "College is registered successfully!" });
    }
  } catch (error) {
    console.log(
      "This is the error of authControllerForCollegeNew.js > insertUser > newCollegeData",
      error
    );
    res.status(500).json({ error: "College registration has failed!" });
  }
};

// Login
const loginLoad = async (req, res) => {
  try {
    res.render("loginForCollege");
    return;
  } catch (error) {
    console.log(
      "This is the error of authControllerForAuthor > loginLoad",
      error
    );
    return null;
  }
};

// Verify Login
const verifyLogin = async (req, res) => {
  try {
    if (!req.body) return null;

    const { username, password } = req.body;

    const collegeData = await College.findOne({ username });

    if (collegeData) {
      const passwordMatch = await bcrypt.compare(
        password,
        collegeData.password
      );
      // console.log("Password matching: ", passwordMatch);

      if (passwordMatch) {
        req.session.collegeData_id = collegeData._id;
        res.redirect("/api/profileForCollege");
        return;
      } else {
        res.render("loginForCollege", {
          message: "Email/password is incorrect!",
        });
        return;
      }
    } else {
      res.render("loginForCollege", {
        message: "Email/password is incorrect!",
      });
      return;
    }
  } catch (error) {
    console.log(
      "This is the error of authControllerForCollege > verifyLogin",
      error
    );
    return null;
  }
};

// College Profile Get Method
const loadCollegeProfile = async (req, res) => {
  try {
    const collegeData = await College.findById({
      _id: req.session.collegeData_id,
    }).select("-password");
    const advertisement = await Advertisement.find();
    res.render("profileForCollege", {
      user: collegeData,
      advertisement: advertisement,
    });
    return;
  } catch (error) {
    console.log(
      "This is the error of authControllerForCollege > loadCollegeProfile",
      error
    );
    return null;
  }
};

// updateName Post Method
const updateName = async (req, res) => {
  try {
    if (!req.body) return null;

    const { name } = req.body;

    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      { $set: { name: name } },
      { returnDocument: "after" }
    );

    return res.status(200).json({ message: "Name updated!" });
  } catch (error) {
    console.log("Error in authControllerForCollege > updateName > try-catch");
    return null;
  }
};

// updateEmail Post Method
const updateEmail = async (req, res) => {
  try {
    if (!req.body) return null;

    const { email } = req.body;

    const userEmail = await College.findOne({ email });

    if (userEmail) {
      return res.json({ message: "This email is already registered!" });
    }

    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      { $set: { email: email } },
      { returnDocument: "after" }
    );
    return res.status(200).json({ message: "Email-id updated!" });
  } catch (error) {
    console.log("Error in authControllerForCollege > updateEmail > try-catch");
    return null;
  }
};

// updateMobile Post Method
const updateMobile = async (req, res) => {
  try {
    if (!req.body) return null;

    const { mobile } = req.body;

    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      { $set: { tel: mobile } },
      { returnDocument: "after" }
    );
    return res.status(200).json({ message: "Mobile number updated!" });
  } catch (error) {
    console.log("Error in authControllerForCollege > updateMobile > try-catch");
    return null;
  }
};

// updateUsername Post Method
const updateUsername = async (req, res) => {
  try {
    if (!req.body) return null;

    const { username } = req.body;

    const userUsername = await College.findOne({ username });

    if (userUsername) {
      return res.json({ message: "This username is already registered!" });
    }

    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      { $set: { username: username } },
      { returnDocument: "after" }
    );
    return res.status(200).json({ message: "Username updated!" });
  } catch (error) {
    console.log(
      "Error in authControllerForCollege > updateUsername > try-catch"
    );
    return null;
  }
};

const gettingClientOTP_on_mobile = async (req, res) => {
  try {
    return res.render("forgotPasswordForCollege");
  } catch (error) {
    return;
  }
};

const verifyClientOTP_on_mobile = async (req, res) => {
  try {
    if (!req.body) return null;
    const { mobileInputData } = req.body;

    const trimmed_mobileInputData = mobileInputData.trim();

    if (!trimmed_mobileInputData.includes("-")) {
      return res.render("forgotPasswordForCollege", {
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
      return res.render("forgotPasswordForCollege", {
        message: "Invalid mobile number!",
      });
    }

    if (isNaN(tested_mobile_number)) {
      return res.render("forgotPasswordForCollege", {
        message: "Invalid mobile number!",
      });
    }

    const mobileCountryCode = CountryMobileCodeData.filter((item) => {
      return country_code === item.dial_code;
    });

    if (!mobileCountryCode) {
      return res.render("forgotPasswordForCollege", {
        message: "Invalid Country Code!",
      });
    }

    const foundUser = await College.findOne({
      tel: tested_mobile_number,
    }).select("-password -username");
    const verification_id = nanoid(4);

    if (foundUser) {
      const user_mobile_number = foundUser.country_code + foundUser.tel;

      let otp = verification_id;
      // console.log(otp);

      req.session.collegeAccount = foundUser;
      req.session.otp_checker_college = otp;

      forgotPasswordVerification(otp, user_mobile_number);

      return res.redirect("/api/accountVerificationForCollege");
    } else {
      return res.render("forgotPasswordForCollege", {
        message: "User not found!",
      });
    }
  } catch (error) {
    console.log(
      "There is some error in authControllerForCollege > verifyClientOTP_on_mobile > try-catch",
      error
    );
    return res.render("forgotPasswordForCollege", {
      message: "OTP verification failed!",
    });
  }
};

const fillVerificationCodeGetMethod = async (req, res) => {
  try {
    res.render("accountVerificationForCollege");
  } catch (error) {
    console.log(
      "This is the error of authControllerForCollege > fillVerificationCodeGetMethod",
      error
    );
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

    if (!(req.session.otp_checker_college === codeFromAccounVerificationPage)) {
      return res.render("accountVerificationForCollege", {
        message: "Wrong OTP! ",
      });
    }
    return res.redirect("/api/setPasswordForCollege");
  } catch (error) {
    console.log(
      "This is the error of authControllerForCollege > fillVerificationCodePostMethod > try-catch",
      error
    );
    return res.render("accountVerificationForCollege", {
      message: "OTP Verification failed!",
    });
  }
};

const setPasswordGetMethod = async (req, res) => {
  try {
    return res.render("setPasswordForCollege");
  } catch (error) {
    console.log(
      "This is the error of authControllerForCollege > setPasswordGetMethod",
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
      return res.render("setPasswordForCollege", {
        message: "First Password must have atleast 7 characters!",
      });
    }

    if (!(secondPassword.length >= 7)) {
      return res.render("setPasswordForCollege", {
        message: "Second Password must have atleast 7 characters!",
      });
    }

    // Letter testing
    const regExp = /[a-zA-Z]/g;
    const has_firstPasswordLetter = regExp.test(firstPassword);
    if (!has_firstPasswordLetter) {
      return res.render("setPasswordForCollege", {
        message: "First Password must include a letter!",
      });
    }

    const has_secondPasswordLetter = regExp.test(secondPassword);
    if (!has_secondPasswordLetter) {
      return res.render("setPasswordForCollege", {
        message: "First Password must include a letter!",
      });
    }

    // Number testing
    const regex = /\d/;
    const has_firstPasswordNumber = regex.test(firstPassword);
    if (!has_firstPasswordNumber) {
      return res.render("setPasswordForCollege", {
        message: "First Password must include a number!",
      });
    }

    const has_secondPasswordNumber = regex.test(secondPassword);
    if (!has_secondPasswordNumber) {
      return res.render("setPasswordForCollege", {
        message: "Second Password must include a number!",
      });
    }

    // Special Character testing
    const specialChars = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
    const has_firstPasswordSpecialCharacter = specialChars.test(firstPassword);
    if (!has_firstPasswordSpecialCharacter) {
      return res.render("setPasswordForCollege", {
        message: "Password must include an special character!",
      });
    }

    const has_secondPasswordSpecialCharacter =
      specialChars.test(secondPassword);
    if (!has_secondPasswordSpecialCharacter) {
      return res.render("setPasswordForCollege", {
        message: "Password must include an special character!",
      });
    }

    if (!(firstPassword === secondPassword)) {
      return res.render("setPasswordForCollege", {
        message: "Passwords are not matching!",
      });
    }

    const collegeAccount = req.session.collegeAccount;

    const hashedResetPassword = await securePassword(secondPassword);

    await College.findOneAndUpdate(
      { tel: collegeAccount.tel },
      { $set: { password: hashedResetPassword } },
      {
        upsert: true,
        new: true,
      }
    );

    return res.redirect("/api/passwordUpdatedForCollege");
  } catch (error) {
    return res.render("setPasswordForCollege", {
      message: "Setting Password failed!",
    });
  }
};

const passwordMatchingGetMethod = async (req, res) => {
  try {
    return res.render("passwordUpdatedForCollege");
  } catch (error) {
    return;
  }
};

const resendPassword = async (req, res) => {
  try {
    if (!req.body) return null;

    const { resendPassaword } = req.body;

    if (resendPassaword.trim()) {
      const collegeAccount = req.session.collegeAccount;
      const user_mobile_number = collegeAccount.country_code + collegeAccount.tel;

      const verification_id = nanoid(4);

      let otp = verification_id;
      // console.log(otp);

      req.session.otp_checker_college = otp;

      forgotPasswordVerification(otp, user_mobile_number);

      return res.render("accountVerificationForCollege", {
        message: "Again an OTP has been sent to you!",
      });
    }
  } catch (error) {
    return res.render("forgotPasswordForCollege", {
      message: "OTP verification failed!",
    });
  }
};

const post_engineering_rank_college_info = async (req, res) => {
  try {
    if (!req.body) return null;

    const { engineering_rank } = req.body;

    const is_it_number = /^\d+$/.test(engineering_rank);

    if (is_it_number) {
      await College.findOneAndUpdate(
        { _id: req.session.collegeData_id },
        { $set: { engineering_rank: engineering_rank } },
        { returnDocument: "after" }
      );
      return res
        .status(200)
        .json({ message: "Engineering College Rank Info updated!" });
    } else {
      return res.status(500).json({ message: "Please enter a valid query!" });
    }
  } catch (error) {
    console.log(
      "Error in authControllerForCollege > post_engineering_rank_college_info > try-catch"
    );
    return null;
  }
};

const post_medical_rank_college_info = async (req, res) => {
  try {
    if (!req.body) return null;

    const { medical_rank } = req.body;

    const is_it_number = /^\d+$/.test(medical_rank);

    if (is_it_number) {
      await College.findOneAndUpdate(
        { _id: req.session.collegeData_id },
        { $set: { medical_rank: medical_rank } },
        { returnDocument: "after" }
      );
      return res
        .status(200)
        .json({ message: "Medical College Rank Info updated!" });
    } else {
      return res.status(500).json({ message: "Please enter a valid query!" });
    }
  } catch (error) {
    console.log(
      "Error in authControllerForCollege > post_medical_rank_college_info > try-catch"
    );
    return null;
  }
};

const post_management_rank_college_info = async (req, res) => {
  try {
    if (!req.body) return null;

    const { management_rank } = req.body;

    const is_it_number = /^\d+$/.test(management_rank);

    if (is_it_number) {
      await College.findOneAndUpdate(
        { _id: req.session.collegeData_id },
        { $set: { management_rank: management_rank } },
        { returnDocument: "after" }
      );
      return res
        .status(200)
        .json({ message: "Management College Rank Info updated!" });
    } else {
      return res.status(500).json({ message: "Please enter a valid query!" });
    }
  } catch (error) {
    console.log(
      "Error in authControllerForCollege > post_management_rank_college_info > try-catch"
    );
    return null;
  }
};

const post_law_rank_college_info = async (req, res) => {
  try {
    if (!req.body) return null;

    const { law_rank } = req.body;

    const is_it_number = /^\d+$/.test(law_rank);

    if (is_it_number) {
      await College.findOneAndUpdate(
        { _id: req.session.collegeData_id },
        { $set: { law_rank: law_rank } },
        { returnDocument: "after" }
      );
      return res
        .status(200)
        .json({ message: "Law College Rank Info updated!" });
    } else {
      return res.status(500).json({ message: "Please enter a valid query!" });
    }
  } catch (error) {
    console.log(
      "Error in authControllerForCollege > post_law_rank_college_info > try-catch"
    );
    return null;
  }
};

const post_fashion_design_rank_college_info = async (req, res) => {
  try {
    if (!req.body) return null;

    const { fashion_design_rank } = req.body;

    const is_it_number = /^\d+$/.test(fashion_design_rank);

    if (is_it_number) {
      await College.findOneAndUpdate(
        { _id: req.session.collegeData_id },
        { $set: { fashion_design_rank: fashion_design_rank } },
        { returnDocument: "after" }
      );
      return res
        .status(200)
        .json({ message: "Fashion Design College Rank Info updated!" });
    } else {
      return res.status(500).json({ message: "Please enter a valid query!" });
    }
  } catch (error) {
    console.log(
      "Error in authControllerForCollege > post_fashion_design_rank_college_info > try-catch"
    );
    return null;
  }
};

const post_pharmacy_rank_college_info = async (req, res) => {
  try {
    if (!req.body) return null;

    const { pharmacy_rank } = req.body;

    const is_it_number = /^\d+$/.test(pharmacy_rank);

    if (is_it_number) {
      await College.findOneAndUpdate(
        { _id: req.session.collegeData_id },
        { $set: { pharmacy_rank: pharmacy_rank } },
        { returnDocument: "after" }
      );
      return res
        .status(200)
        .json({ message: "Pharmacy College Rank Info updated!" });
    } else {
      return res.status(500).json({ message: "Please enter a valid query!" });
    }
  } catch (error) {
    console.log(
      "Error in authControllerForCollege > post_pharmacy_rank_college_info > try-catch"
    );
    return null;
  }
};

const post_overall_rank_college_info = async (req, res) => {
  try {
    if (!req.body) return null;

    const { overall_rank } = req.body;

    const is_it_number = /^\d+$/.test(overall_rank);

    if (is_it_number) {
      await College.findOneAndUpdate(
        { _id: req.session.collegeData_id },
        { $set: { overall_rank: overall_rank } },
        { returnDocument: "after" }
      );
      return res
        .status(200)
        .json({ message: "Overall College Rank Info updated!" });
    } else {
      return res.status(500).json({ message: "Please enter a valid query!" });
    }
  } catch (error) {
    console.log(
      "Error in authControllerForCollege > post_college_rank_college_info > try-catch"
    );
    return res
      .status(500)
      .json({ message: "Overall College Rank Info updation failed!" });
  }
};

const post_short_name_college_info = async (req, res) => {
  try {
    if (!req.body) return null;

    const { short_name } = req.body;

    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      { $set: { college_short_name: short_name } },
      { returnDocument: "after" }
    );
    return res.status(200).json({ message: "Short Name Info updated!" });
  } catch (error) {
    console.log(
      "Error in authControllerForCollege > post_short_name_college_info > try-catch"
    );
    return null;
  }
};

const post_institute_type_college_info = async (req, res) => {
  try {
    if (!req.body) return null;

    const { institute_type } = req.body;

    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      { $set: { institute_type: institute_type } },
      { returnDocument: "after" }
    );
    return res.status(200).json({ message: "Institute Type Info updated!" });
  } catch (error) {
    console.log(
      "Error in authControllerForCollege > post_institute_type_college_info > try-catch"
    );
    return null;
  }
};

const post_courses_offered_college_info = async (req, res) => {
  try {
    if (!req.body) return null;
    const { courses_offered } = req.body;
    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      {
        $set: {
          courses_offered: courses_offered,
        },
      },
      {
        returnOriginal: false,
      }
    );
    return res.status(200).json({ message: "Courses Offered Info updated!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Courses Offered Info updation failed!" });
  }
};

const post_college_campus_college_info = async (req, res) => {
  try {
    if (!req.body) return null;
    const { college_campus } = req.body;
    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      {
        $set: {
          college_campus: college_campus,
        },
      },
      {
        returnOriginal: false,
      }
    );
    return res.status(200).json({ message: "College Campus Info updated!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "College Campus Info updation failed!" });
  }
};

const post_university_college_info = async (req, res) => {
  try {
    if (!req.body) return null;
    const { university_name } = req.body;
    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      {
        $set: {
          university_name: university_name,
        },
      },
      {
        returnOriginal: false,
      }
    );
    return res.status(200).json({ message: "University Info updated!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "University Info updation failed!" });
  }
};

const post_approvals_college_info = async (req, res) => {
  try {
    if (!req.body) return null;
    const { approvals } = req.body;
    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      {
        $set: {
          approvals: approvals,
        },
      },
      {
        returnOriginal: false,
      }
    );
    return res.status(200).json({ message: "Approvals Info updated!" });
  } catch (error) {
    return res.status(500).json({ message: "Approvals Info updation failed!" });
  }
};

const post_ownership_college_info = async (req, res) => {
  try {
    if (!req.body) return null;
    const { ownership } = req.body;
    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      {
        $set: {
          ownership: ownership,
        },
      },
      {
        returnOriginal: false,
      }
    );
    return res.status(200).json({ message: "Ownership Info updated!" });
  } catch (error) {
    return res.status(500).json({ message: "Ownership Info updation failed!" });
  }
};

const post_college_admission_college_info = async (req, res) => {
  try {
    if (!req.body) return null;
    const { college_admission } = req.body;

    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      {
        $set: {
          college_admission: college_admission,
        },
      },
      {
        returnOriginal: false,
      }
    );
    return res.status(200).json({ message: "College Admission Info updated!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "College Admission Info updation failed!" });
  }
};

const post_entrance_exam_college_info = async (req, res) => {
  try {
    if (!req.body) return null;
    const { entrance_exam } = req.body;

    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      {
        $set: {
          entrance_exam: entrance_exam,
        },
      },
      {
        returnOriginal: false,
      }
    );
    return res.status(200).json({ message: "Entrance Exam Info updated!" });
  } catch (error) {
    return res.status(500).json({ message: "Entrance Exam updation failed!" });
  }
};

const post_contact_college_info = async (req, res) => {
  try {
    if (!req.body) return null;
    const { contact } = req.body;

    const is_it_number = /^\d+$/.test(contact);

    if (is_it_number) {
      await College.findOneAndUpdate(
        { _id: req.session.collegeData_id },
        {
          $set: {
            tel: contact,
          },
        },
        {
          returnOriginal: false,
        }
      );
      return res.status(200).json({ message: "Contact Info updated!" });
    } else {
      return res.status(500).json({ message: "Please enter a valid query!" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Contact Info updation failed!" });
  }
};

const post_city_college_info = async (req, res) => {
  try {
    if (!req.body) return null;
    const { city } = req.body;

    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      {
        $set: {
          city: city,
        },
      },
      {
        returnOriginal: false,
      }
    );
    return res.status(200).json({ message: "City Info updated!" });
  } catch (error) {
    return res.status(500).json({ message: "City Info updation failed!" });
  }
};

const post_website_college_info = async (req, res) => {
  try {
    if (!req.body) return null;
    const { college_website } = req.body;
    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      {
        $set: {
          college_website: college_website,
        },
      },
      {
        returnOriginal: false,
      }
    );
    return res.status(200).json({ message: "Website Info updated!" });
  } catch (error) {
    return res.status(500).json({ message: "Website Info updation failed!" });
  }
};

const post_state_or_ut_name_college_info = async (req, res) => {
  try {
    if (!req.body) return null;
    const { state_or_ut_name } = req.body;

    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      {
        $set: {
          state_or_ut_name: state_or_ut_name,
        },
      },
      {
        returnOriginal: false,
      }
    );
    return res.status(200).json({ message: "State Name Info updated!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "State Name Info updation failed!" });
  }
};

const post_district_name_college_info = async (req, res) => {
  try {
    if (!req.body) return null;
    const { district_name } = req.body;
    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      {
        $set: {
          district_name: district_name,
        },
      },
      {
        returnOriginal: false,
      }
    );
    return res.status(200).json({ message: "District Name Info updated!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "District Name Info updation failed!" });
  }
};

const post_email_college_info = async (req, res) => {
  try {
    if (!req.body) return null;
    const { email } = req.body;

    const userEmail = await College.findOne({ email });

    if (userEmail) {
      return res.json({ message: "This email is already registered!" });
    }

    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      {
        $set: {
          email: email,
        },
      },
      {
        returnOriginal: false,
      }
    );
    return res.status(200).json({ message: "Email Info updated!" });
  } catch (error) {
    return res.status(500).json({ message: "Email Info updation failed!" });
  }
};

const post_engineering_fees_college_info = async (req, res) => {
  try {
    if (!req.body) return null;
    const { engineering_fees } = req.body;

    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      {
        $set: {
          engineering_fees: engineering_fees,
        },
      },
      {
        returnOriginal: false,
      }
    );
    return res.status(200).json({ message: "Engineering Fees Info updated!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Engineering Fees Info updation failed!" });
  }
};

const post_medical_fees_college_info = async (req, res) => {
  try {
    if (!req.body) return null;
    const { medical_fees } = req.body;

    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      {
        $set: {
          medical_fees: medical_fees,
        },
      },
      {
        returnOriginal: false,
      }
    );
    return res.status(200).json({ message: "Medical Fees Info updated!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Medical Fees Info updation failed!" });
  }
};

const post_management_fees_college_info = async (req, res) => {
  try {
    if (!req.body) return null;
    const { management_fees } = req.body;

    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      {
        $set: {
          management_fees: management_fees,
        },
      },
      {
        returnOriginal: false,
      }
    );
    return res.status(200).json({ message: "Management Fees Info updated!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Management Fees Info updation failed!" });
  }
};

const post_law_fees_college_info = async (req, res) => {
  try {
    if (!req.body) return null;
    const { law_fees } = req.body;

    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      {
        $set: {
          law_fees: law_fees,
        },
      },
      {
        returnOriginal: false,
      }
    );
    return res.status(200).json({ message: "Law Fees Info updated!" });
  } catch (error) {
    return res.status(500).json({ message: "Law Fees Info updation failed!" });
  }
};

const post_fashion_design_fees_college_info = async (req, res) => {
  try {
    if (!req.body) return null;
    const { fashion_design_fees } = req.body;

    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      {
        $set: {
          fashion_design_fees: fashion_design_fees,
        },
      },
      {
        returnOriginal: false,
      }
    );
    return res
      .status(200)
      .json({ message: "Fashion Design Fees Info updated!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Fashion Design Fees Info updation failed!" });
  }
};

const post_pharmacy_fees_college_info = async (req, res) => {
  try {
    if (!req.body) return null;
    const { pharmacy_fees } = req.body;

    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      {
        $set: {
          pharmacy_fees: pharmacy_fees,
        },
      },
      {
        returnOriginal: false,
      }
    );
    return res.status(200).json({ message: "Pharmacy Fees Info updated!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Pharmacy Fees Info updation failed!" });
  }
};

const post_profile_image_college_info = async (req, res) => {
  try {
    if (!req.file) return null;

    const filenameLocalPath = req.file?.path;

    const collegeData1 = await College.findById({
      _id: req.session.collegeData_id,
    });

    if (collegeData1.cloudinary_profile_image_public_id === "") {
      const filenameLocalPath = req.file?.path;

      if (!filenameLocalPath) {
        return res.status(500).json({ message: "Image is required!" });
      }

      const profile_Image = await uploadOnCloudinaryForCollegeProfileImage(
        filenameLocalPath
      );

      if (profile_Image) {
        await College.findOneAndUpdate(
          { _id: req.session.collegeData_id },
          {
            $set: {
              profile_image: profile_Image.secure_url,
              cloudinary_profile_image_public_id: profile_Image.public_id,
            },
          },
          {
            returnOriginal: false,
          }
        );
        return res.status(200).json({ message: "Profile Image updated!" });
      }
    } else {
      const filenameLocalPath = req.file?.path;

      if (!filenameLocalPath) {
        return res.status(500).json({ message: "Profile Image is required!" });
      }

      const cloudinary_profile_image_public_id =
        collegeData1.cloudinary_profile_image_public_id;

      if (cloudinary_profile_image_public_id) {
        const profile_Image =
          await uploadNewAndDeleteOldOnCloudinaryForProfileImage(
            cloudinary_profile_image_public_id,
            filenameLocalPath
          );

        if (profile_Image) {
          await College.findOneAndUpdate(
            { _id: req.session.collegeData_id },
            {
              $set: {
                profile_image: profile_Image.secure_url,
                cloudinary_profile_image_public_id: profile_Image.public_id,
              },
            },
            {
              returnOriginal: false,
            }
          );
          return res.status(200).json({ message: "Profile Image updated!" });
        }
      }
    }
  } catch (error) {
    return res.status(500).json({ message: "Profile Image updation failed!" });
  }
};

const post_cover_image_college_info = async (req, res) => {
  try {
    if (!req.file) return null;

    const collegeData1 = await College.findById({
      _id: req.session.collegeData_id,
    });

    if (collegeData1.cloudinary_cover_image_public_id === "") {
      const filenameLocalPath = req.file?.path;

      if (!filenameLocalPath) {
        return res.status(500).json({ message: "Cover Image is required!" });
      }
      const cover_Image = await uploadOnCloudinaryForCollegeCoverImage(
        filenameLocalPath
      );

      if (cover_Image) {
        await College.findOneAndUpdate(
          { _id: req.session.collegeData_id },
          {
            $set: {
              cover_image: cover_Image.secure_url,
              cloudinary_cover_image_public_id: cover_Image.public_id,
            },
          },
          {
            returnOriginal: false,
          }
        );
        return res.status(200).json({ message: "Cover Image updated!" });
      }
    } else {
      const filenameLocalPath = req.file?.path;

      if (!filenameLocalPath) {
        return res.status(500).json({ message: "Cover Image is required!" });
      }

      const cloudinary_cover_image_public_id =
        collegeData1.cloudinary_cover_image_public_id;

      if (cloudinary_cover_image_public_id) {
        const cover_Image =
          await uploadNewAndDeleteOldOnCloudinaryForCoverImage(
            cloudinary_cover_image_public_id,
            filenameLocalPath
          );

        if (cover_Image) {
          await College.findOneAndUpdate(
            { _id: req.session.collegeData_id },
            {
              $set: {
                cover_image: cover_Image.secure_url,
                cloudinary_cover_image_public_id: cover_Image.public_id,
              },
            },
            {
              returnOriginal: false,
            }
          );
          return res.status(200).json({ message: "Cover Image updated!" });
        }
      }
    }
  } catch (error) {
    return res.status(500).json({ message: "Cover Image updation failed!" });
  }
};

const post_college_details_brochure_college_info = async (req, res) => {
  try {
    if (!req.file) return null;

    const collegeData1 = await College.findById({
      _id: req.session.collegeData_id,
    });

    if (collegeData1.cloudinary_college_details_brochure_public_id === "") {
      const filenameLocalPath = req.file?.path;

      if (!filenameLocalPath) {
        return res.status(500).json({ message: "PDF File is required!" });
      }
      const college_details_brochure =
        await uploadOnCloudinaryForCollegeDetailsBrochure(filenameLocalPath);

      if (college_details_brochure) {
        await College.findOneAndUpdate(
          { _id: req.session.collegeData_id },
          {
            $set: {
              college_details_brochure: college_details_brochure.secure_url,
              cloudinary_college_details_brochure_public_id:
                college_details_brochure.public_id,
            },
          },
          {
            returnOriginal: false,
          }
        );
        return res
          .status(200)
          .json({ message: "College Details Brochure updated!" });
      }
    } else {
      const filenameLocalPath = req.file?.path;

      if (!filenameLocalPath) {
        return res.status(500).json({ message: "PDF File is required!" });
      }

      const old_cloudinary_college_details_brochure_public_id =
        collegeData1.cloudinary_college_details_brochure_public_id;

      if (old_cloudinary_college_details_brochure_public_id) {
        const college_details_brochure =
          await uploadNewAndDeleteOldOnCloudinaryForCollegeDetailsBrochure(
            old_cloudinary_college_details_brochure_public_id,
            filenameLocalPath
          );

        if (college_details_brochure) {
          await College.findOneAndUpdate(
            { _id: req.session.collegeData_id },
            {
              $set: {
                college_details_brochure: college_details_brochure.secure_url,
                cloudinary_college_details_brochure_public_id:
                  college_details_brochure.public_id,
              },
            },
            {
              returnOriginal: false,
            }
          );
          return res
            .status(200)
            .json({ message: "College Details Brochure updated!" });
        } else {
          console.log("college details brochure is not there!");
        }
      } else {
        console.log(
          "old_cloudinary_college_details_brochure_public_id is not there!"
        );
      }
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "College Details Brochure updation failed!" });
  }
};

const post_latest_news_and_events_college_info = async (req, res) => {
  try {
    if (!req.body) return null;
    const { latest_news_and_events } = req.body;

    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      {
        $set: {
          latest_news_and_events: latest_news_and_events,
        },
      },
      {
        returnOriginal: false,
      }
    );
    return res
      .status(200)
      .json({ message: "Latest News and Events Info updated!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Latest News and Events Info updation failed!" });
  }
};

const post_description_college_info = async (req, res) => {
  try {
    if (!req.body) return null;
    const { college_description } = req.body;

    await College.findOneAndUpdate(
      { _id: req.session.collegeData_id },
      {
        $set: {
          college_description: college_description,
        },
      },
      {
        returnOriginal: false,
      }
    );
    return res.status(200).json({ message: "Description updated!" });
  } catch (error) {
    return res.status(500).json({ message: "Description updation failed!" });
  }
};

// Settings For College
const loadSettingsForCollege = async (req, res) => {
  try {
    const collegeData = await College.findById({
      _id: req.session.collegeData_id,
    });
    return res.render("settingsForCollege", { user: collegeData });
  } catch (error) {
    console.log(
      "This is the error of authControllerForCollege > loadSettingsForCollege",
      error
    );
  }
};

// Logout For College
const collegeLogout = async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
        return res.status(500).send("Internal Server Error");
      }
      res.clearCookie('connect.sid', { path: '/' });
      res.redirect('/api/loginForCollege');
    });
  } catch (error) {
    console.log(
      "This is the error of authControllerForCollege > collegeLogout",
      error
    );
    return null;
  }
};

// Delete College Account
const deleteCollegeAccount = async (req, res) => {
  try {
    await College.findByIdAndDelete(
      { _id: req.session.collegeData_id },
      req.body
    ).then((user) => {
      delete_Image_from_Cloudinary(user.cloudinary_profile_image_public_id);
      delete_College_Cover_Image_from_Cloudinary(
        user.cloudinary_cover_image_public_id
      );
      req.session.destroy();
      res.redirect("/api/registerForCollege");
    });
    return null;
  } catch (error) {
    console.log(
      "This is the error of authControllerForCollege > deleteCollegeAccount",
      error
    );
    return null;
  }
};

// Sending All Colleges from database to Main Website
const getting_List_of_Colleges = async (req, res) => {
  const list_of_colleges = await College.find().select("-password");

  const list_of_colleges_arr = [];

  list_of_colleges.map((item) => {
    if (item.verification_process === "true") {
      list_of_colleges_arr.push(item);
    }
  });

  return res.json(list_of_colleges_arr);
};

module.exports = {
  register,
  insertCollege,
  loginLoad,
  verifyLogin,
  loadCollegeProfile,
  updateName,
  updateMobile,
  updateUsername,
  gettingClientOTP_on_mobile,
  verifyClientOTP_on_mobile,
  fillVerificationCodeGetMethod,
  fillVerificationCodePostMethod,
  setPasswordGetMethod,
  setPasswordPostMethod,
  passwordMatchingGetMethod,
  resendPassword,
  post_engineering_rank_college_info,
  post_medical_rank_college_info,
  post_management_rank_college_info,
  post_law_rank_college_info,
  post_fashion_design_rank_college_info,
  post_pharmacy_rank_college_info,
  post_overall_rank_college_info,
  post_short_name_college_info,
  post_institute_type_college_info,
  post_courses_offered_college_info,
  post_approvals_college_info,
  post_ownership_college_info,
  post_entrance_exam_college_info,
  post_state_or_ut_name_college_info,
  post_engineering_fees_college_info,
  post_medical_fees_college_info,
  post_management_fees_college_info,
  post_law_fees_college_info,
  post_fashion_design_fees_college_info,
  post_pharmacy_fees_college_info,
  post_college_details_brochure_college_info,
  post_latest_news_and_events_college_info,
  updateEmail,
  post_college_campus_college_info,
  post_university_college_info,
  post_website_college_info,
  post_college_admission_college_info,
  post_email_college_info,
  post_contact_college_info,
  post_city_college_info,
  post_district_name_college_info,
  post_cover_image_college_info,
  post_description_college_info,
  post_profile_image_college_info,
  loadSettingsForCollege,
  collegeLogout,
  deleteCollegeAccount,
  getting_List_of_Colleges,
};
