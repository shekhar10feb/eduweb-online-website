// =======================
//   AuthControllerForUser Page
// =======================

const User = require("../models/user.models.js");
const Author = require("../models/author.models.js");
const College = require("../models/college.models.js");
const Advertisement = require("../models/advertisement.models.js");
const QuestionPaper = require("../models/question_paper.models.js");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const {
  uploadOnCloudinaryForUser,
  delete_Image_from_Cloudinary,
} = require("../utils/Cloudinary.js");
const {
  forgotPasswordVerification,
} = require("../utils/ForgotPasswordVerification.js");
const { CountryMobileCodeData } = require("../utils/CountryMobileCodeData.js");
const { nanoid } = require("nanoid");

// Secure Password
const securePassword = async (password) => {
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    return passwordHash;
  } catch (error) {
    console.log("This is the error of authController > securePassword", error);
    throw new Error("Password hashing failed");
  }
};

// Signup
const register = async (req, res) => {
  try {
    return res.render("register");
  } catch (error) {
    console.log("This is the error of authController > register", error);
  }
};

// Insert User
const insertUser = async (req, res) => {
  try {
    if (!req.body && !req.files) return null;

    const {
      name,
      email,
      username,
      tel,
      password,
      interest,
      terms_conditions_and_privacy_policy,
    } = req.body;

    if (
      [
        name,
        email,
        username,
        tel,
        password,
        interest,
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

    const userData = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (userData) {
      return res
        .status(500)
        .json({ error: "User already exists. Please Login!" });
    }

    const profile_image = await uploadOnCloudinaryForUser(filenameLocalPath);

    const hashedPassword = await securePassword(password);

    const newUserData = await User.create({
      name: name,
      email: email,
      username: username,
      tel: tested_mobile_number,
      country_code: country_code,
      password: hashedPassword,
      interest: interest,
      terms_conditions_and_privacy_policy: terms_conditions_and_privacy_policy,
      profile_image: profile_image.secure_url,
      cloudinary_image_public_id: profile_image.public_id,
      total_star_rating: 0,
      number_people_who_rated: 0,
    });

    newUserData.save();

    res.status(200).json({ message: "User is registered successfully!" });
  } catch (error) {
    console.log(
      "This is the error of authControllerNew.js > insertUser > newUserData",
      error
    );
    res.status(500).json({ error: "User registration has failed!" });
  }
};

// Login
const loginLoad = async (req, res) => {
  try {
    return res.render("login");
  } catch (error) {
    console.log("This is the error of authController > loginLoad", error);
  }
};

// Verify Login for User
const verifyLogin = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const userData = await User.findOne({ username: username });

    if (userData) {
      const passwordMatch = await bcrypt.compare(password, userData.password);

      if (passwordMatch) {
        req.session.user_id = userData._id;
        res.redirect("/api/home");
      } else {
        res.render("login", { message: "Email/password is incorrect!" });
      }
    } else {
      res.render("login", { message: "Email/password is incorrect!" });
    }
    // }
  } catch (error) {
    console.log("This is the error of authController > verifyLogin", error);
  }
};

// Get Method loadHome
const loadHome = async (req, res) => {
  try {
    const userData = await User.findById({ _id: req.session.user_id });
    const advertisement = await Advertisement.find();
    const url = `${process.env.MONTY_NEWS_API}`;

    return res.render("home", {
      user: userData,
      url: url,
      advertisement: advertisement,
    });
  } catch (error) {
    console.log("This is the error of authController > loadHome", error);
  }
};

// User Profile Get Method
const loadProfile = async (req, res) => {
  try {
    const userData = await User.findById({ _id: req.session.user_id });
    res.render("profile", { user: userData });
  } catch (error) {
    console.log("This is the error of authController > loadProfile", error);
  }
};

// Settings Get Method
const loadSettings = async (req, res) => {
  try {
    const userData = await User.findById({ _id: req.session.user_id });
    res.render("settings", { user: userData });
  } catch (error) {
    console.log("This is the error of authController > loadSettings", error);
  }
};

// User Logout
const userLogout = async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
        return res.status(500).send("Internal Server Error");
      }
      res.clearCookie('connect.sid', { path: '/' });
      res.redirect('/api/login');
    });
  } catch (error) {
    console.log("This is the error of authController > userLogout", error);
    return null;
  }
};

const previous_years_question_papers_get_method = async (req, res) => {
  try {
    const userData = await User.findById({ _id: req.session.user_id }).select(
      "-password"
    );
    const advertisement = await Advertisement.find();

    res.render("previous_years_question_papers", {
      user: userData,
      advertisement: advertisement,
    });
  } catch (error) {
    return res.status(500).json({ message: "Query not found!" });
  }
};

const previous_years_question_papers_post_method = async (req, res) => {
  try {
    const question_paper = await QuestionPaper.find();

    const { form_search_input } = req.body;

    let result = question_paper.filter(
      (u) => u.states_or_uts.toUpperCase() == form_search_input.toUpperCase()
    );

    if (result.length !== 0) {
      return res.send(result);
    } else {
      return res.status(500).json({ message: "Query not found!" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Query not found!" });
  }
};

const searchQueryPageGetMethod = async (req, res) => {
  try {
    // res.render("search_All_Colleges");
  } catch (error) {
    console.log(
      "This is the error of authControllerForUser.js > searchQueryPageGetMethod",
      error
    );
  }
};

// search_Colleges_Exams_Courses_by_user_post_method
const search_Colleges_Exams_Courses_by_user_post_method = async (req, res) => {
  const college = await College.find();
  const userData = await User.findById({ _id: req.session.user_id });
  const advertisement = await Advertisement.find();
  const url = `${process.env.MONTY_NEWS_API}`;

  try {
    const { form_search_home } = req.body;

    const search_query1 = form_search_home.trim();
    const search_query = search_query1.toUpperCase();

    let result = college.filter((u) => {
      if (u.name.toUpperCase() == search_query) {
        return u;
      } else if (u.college_short_name.toUpperCase() == search_query) {
        return u;
      }
    });

    let state_or_ut_result = college.filter(
      (u) =>
        u.state_or_ut_name.toUpperCase() == search_query ||
        u.city.toUpperCase() == search_query ||
        u.district_name.toUpperCase() == search_query ||
        u.college_short_name.toUpperCase() == search_query ||
        u.institute_type.toUpperCase() == search_query ||
        u.university_name.toUpperCase() == search_query
    );

    if (
      search_query == "COLLEGES" ||
      search_query == "ALL COLLEGES" ||
      search_query == "ALL COLLEGE" ||
      search_query == "COLLEGE" ||
      search_query == "ANY COLLEGE"
    ) {
      return res.status(302).redirect("/api/search_All_Colleges");
    } else if (
      search_query.includes("ENGG") ||
      search_query == "ENGINEERING" ||
      search_query == "BTECH" ||
      search_query == "B.TECH"
    ) {
      return res.status(302).redirect("/api/engineering_colleges");
    } else if (search_query == "MEDICAL") {
      return res.status(302).redirect("/api/medical_colleges");
    } else if (search_query.includes("DESIGN")) {
      return res.status(302).redirect("/api/designing_colleges");
    } else if (search_query == "MANAGEMENT" || search_query == "MBA") {
      return res.status(302).redirect("/api/management_colleges");
    } else if (result.length !== 0) {
      return res
        .status(302)
        .redirect(`/api/search_All_Colleges/${result[0].name}`);
    } else if (state_or_ut_result.length !== 0) {
      return res.render(
        "colleges_selected_based_on_state_or_city_for_authControllerForUser",
        {
          user: userData,
          advertisement: advertisement,
          all_colleges: state_or_ut_result,
        }
      );
    } else {
      return res.render("home", {
        user: userData,
        url: url,
        advertisement: advertisement,
        message: "Please enter a valid input!",
      });
    }
  } catch (error) {
    return res.render("home", {
      user: userData,
      url: url,
      advertisement: advertisement,
      message: "Query not found!",
    });
  }
};

// search_All_Colleges_get_method
const search_All_Colleges_get_method = async (req, res) => {
  try {
    const userData = await User.findById({ _id: req.session.user_id }).select(
      "-password"
    );
    const all_colleges = await College.find();
    const advertisement = await Advertisement.find();

    res.render("search_All_Colleges", {
      user: userData,
      all_colleges: all_colleges,
      advertisement: advertisement,
    });
  } catch (error) {
    return res.status(500).json({ message: "Query not found!" });
  }
};

const engineering_colleges_get_method = async (req, res) => {
  try {
    const userData = await User.findById({ _id: req.session.user_id }).select(
      "-password"
    );
    const all_colleges = await College.find();
    const advertisement = await Advertisement.find();

    res.render("all_engineering_colleges", {
      user: userData,
      all_colleges: all_colleges,
      advertisement: advertisement,
    });
  } catch (error) {
    return res.status(500).json({ message: "Query not found!" });
  }
};

const management_colleges_get_method = async (req, res) => {
  try {
    const userData = await User.findById({ _id: req.session.user_id }).select(
      "-password"
    );
    const all_colleges = await College.find();
    const advertisement = await Advertisement.find();

    res.render("all_management_colleges", {
      user: userData,
      all_colleges: all_colleges,
      advertisement: advertisement,
    });
  } catch (error) {
    return res.status(500).json({ message: "Query not found!" });
  }
};

const medical_colleges_get_method = async (req, res) => {
  try {
    const userData = await User.findById({ _id: req.session.user_id }).select(
      "-password"
    );
    const all_colleges = await College.find();
    const advertisement = await Advertisement.find();

    res.render("all_medical_colleges", {
      user: userData,
      all_colleges: all_colleges,
      advertisement: advertisement,
    });
  } catch (error) {
    return res.status(500).json({ message: "Query not found!" });
  }
};

const designing_colleges_get_method = async (req, res) => {
  try {
    const userData = await User.findById({ _id: req.session.user_id }).select(
      "-password"
    );
    const all_colleges = await College.find();
    const advertisement = await Advertisement.find();

    res.render("all_disigning_colleges", {
      user: userData,
      all_colleges: all_colleges,
      advertisement: advertisement,
    });
  } catch (error) {
    return res.status(500).json({ message: "Query not found!" });
  }
};

const college_information = async (req, res) => {
  try {
    const college_name = req.params.name;
    const userData = await User.findById({ _id: req.session.user_id });
    const college = await College.find();
    const advertisement = await Advertisement.find();
    const collegeData = college.filter(
      (item) => item.name == college_name.trim()
    );

    res.render("college_Information_for_home_input_search", {
      college: collegeData,
      advertisement: advertisement,
      user: userData,
    });
  } catch (error) {
    console.log("Error in /college-information/:id ", error);
  }
};

// Search Page Article Save Post Method
const searchPageArticleSavePostMethod = async (req, res) => {
  try {
    const dataTitle = req.body.dataTitle;
    const dataContent = req.body.dataContent;
    const dataPublishDate = req.body.dataPublishDate;
    const dataLink = req.body.data;
    const signalData = req.body.signalData;

    if (signalData === "save") {
      let matchingResult = await User.findOne({ _id: req.session.user_id })
        .then((docs) => {
          try {
            // Matching user's selected option to the element in database
            const item = docs.articles.findIndex(
              (item) => item.articleTitle === dataTitle
            );

            if (item > -1) {
              // If there is matching item, then do nothing!
            } else {
              const article = User.findByIdAndUpdate(
                req.session.user_id,
                {
                  $push: {
                    articles: {
                      articleTitle: dataTitle,
                      articleContent: dataContent,
                      articleLink: dataLink,
                      articlePublishedDate: dataPublishDate,
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
              // article.save();
            }
          } catch (error) {
            console.log(
              "There is an error in authController > articleLink > signalData === save > matchingResult > .then-catch > try-catch",
              error
            );
          }
        })
        .catch((err) => {
          console.log(
            "There is an error in authController > articleLink > signalData === save > matchingResult > .then-catch",
            err
          );
        });
    } else if (signalData === "delete") {
      const result = await User.findByIdAndUpdate(req.session.user_id, {
        new: true,
        upsert: true,
        projection: { _id: 0, __v: 0 },
      })
        .then((docs) => {
          try {
            const item = docs.articles.findIndex(
              (item) => item.articleTitle === dataTitle
            );

            if (item > -1) {
              // The below line is to check the items in the article
              // console.log(docs.articles[item]);

              // remove it from the array.
              docs.articles.splice(item, 1);

              // article.save() will require in future. So, please don't deleter this below lines
              // save the doc
              docs.save();
            } else {
              console.log(
                "There is an error in authController > articleLink > signalData === delete > result > .then-catch > try-catch > else"
              );
            }
          } catch (error) {
            console.log(
              "There is an error in authController > articleLink > signalData === delete > result > .then-catch > try-catch",
              error
            );
          }
        })
        .catch((error) => {
          console.log(
            "There is an error in authController > articleLink > signalData === delete > result > .then-catch",
            error
          );
        });
    }
  } catch (error) {
    console.log(
      "This is the error of authController > articleLink > try-catch",
      error
    );
  }
};

// Getting the article data from home.ejs and pushing to User ID's database
const articleLink = async (req, res) => {
  try {
    const dataTitle = req.body.dataTitle;
    const dataContent = req.body.dataContent;
    const dataPublishDate = req.body.dataPublishDate;
    const dataLink = req.body.data;
    const signalData = req.body.signalData;

    if (signalData === "save") {
      let matchingResult = await User.findOne({ _id: req.session.user_id })
        .then((docs) => {
          try {
            // Matching user's selected option to the element in database
            const item = docs.articles.findIndex(
              (item) => item.articleTitle === dataTitle
            );

            if (item > -1) {
              // If there is matching item, then do nothing!
            } else {
              const article = User.findByIdAndUpdate(
                req.session.user_id,
                {
                  $push: {
                    articles: {
                      articleTitle: dataTitle,
                      articleContent: dataContent,
                      articleLink: dataLink,
                      articlePublishedDate: dataPublishDate,
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
              // article.save();
            }
          } catch (error) {
            console.log(
              "There is an error in authController > articleLink > signalData === save > matchingResult > .then-catch > try-catch",
              error
            );
          }
        })
        .catch((err) => {
          console.log(
            "There is an error in authController > articleLink > signalData === save > matchingResult > .then-catch",
            err
          );
        });
    } else if (signalData === "delete") {
      const result = await User.findByIdAndUpdate(req.session.user_id, {
        new: true,
        upsert: true,
        projection: { _id: 0, __v: 0 },
      })
        .then((docs) => {
          try {
            const item = docs.articles.findIndex(
              (item) => item.articleTitle === dataTitle
            );

            if (item > -1) {
              // The below line is to check the items in the article
              // console.log(docs.articles[item]);

              // remove it from the array.
              docs.articles.splice(item, 1);

              // article.save() will require in future. So, please don't deleter this below lines
              // save the doc
              docs.save();
            } else {
              console.log(
                "There is an error in authController > articleLink > signalData === delete > result > .then-catch > try-catch > else"
              );
            }
          } catch (error) {
            console.log(
              "There is an error in authController > articleLink > signalData === delete > result > .then-catch > try-catch",
              error
            );
          }
        })
        .catch((error) => {
          console.log(
            "There is an error in authController > articleLink > signalData === delete > result > .then-catch",
            error
          );
        });
    }
  } catch (error) {
    console.log(
      "This is the error of authController > articleLink > try-catch",
      error
    );
  }
};

// Getting the article title in order to delete the article from profile using delete button
const gettingArticleTitle = async (req, res) => {
  try {
    const articleTitle1 = req.body.articleTitle;
    const articleTitle = articleTitle1.trim();

    const result = await User.findOneAndUpdate(
      { _id: req.session.user_id },
      {
        new: true,
        upsert: true,
        projection: { _id: 0, __v: 0 },
      }
    ).then((docs) => {
      try {
        const item = docs.articles.findIndex(
          (item) => item.articleTitle === articleTitle
        );

        if (item !== -1) {
          docs.articles.splice(item, 1);
          // save the doc
          docs.save();
        } else {
          console.log(
            "There is an error in authController > articleLink > else"
          );
        }
      } catch (error) {
        console.log(
          "This is the error of authController > gettingArticleTitle > try-catch ",
          error
        );
      }
    });
  } catch (error) {
    console.log(
      "This is the error of authController > gettingArticleTitle ",
      error
    );
  }
};

// College Rating given by a User
const star_rating_given_by_user_to_college = async (req, res) => {
  try {
    if (!req.body) return null;
    const { star_rating, college_id } = req.body;
    const college = await College.find({ _id: college_id.trim() });

    const trimmed_star_rating = star_rating.trim();
    const trimmed_college_id = college_id.trim();

    const star_rating_by_user = parseInt(Math.ceil(trimmed_star_rating)) + "/5";

    const overall_number_people_who_rated =
      college[0].number_people_who_rated + 1;

    const overall_total_star_rating =
      college[0].total_star_rating + Number(trimmed_star_rating);

    const percentage_of_college_rating =
      (overall_total_star_rating / (5 * overall_number_people_who_rated)) * 100;

    const overall_rating1 = (percentage_of_college_rating / 100) * 5;

    const overall_rating = parseInt(Math.ceil(overall_rating1)) + "/5";

    await College.findOneAndUpdate(
      { _id: trimmed_college_id },
      {
        $set: {
          college_rating: overall_rating,
          number_people_who_rated: overall_number_people_who_rated,
          total_star_rating: overall_total_star_rating,
        },
      }
    );

    await User.findOneAndUpdate(
      { _id: req.session.user_id },
      {
        // new: true,
        upsert: true,
        projection: { _id: 0, __v: 0 },
      }
    ).then((docs) => {
      try {
        const item = docs.college_rating_related.findIndex(
          (item) => item.college_id === trimmed_college_id
        );

        if (item > -1) {
          User.findByIdAndUpdate(
            { _id: req.session.user_id },
            {
              $set: {
                college_rating_related: {
                  college_id: trimmed_college_id,
                  college_rating: star_rating_by_user,
                },
              },
            },
            { returnDocument: "after" }
          ).exec();
        } else {
          User.findByIdAndUpdate(
            { _id: req.session.user_id },
            {
              $push: {
                college_rating_related: {
                  college_id: trimmed_college_id,
                  college_rating: star_rating_by_user,
                },
              },
            },
            { returnDocument: "after" }
          ).exec();
        }
      } catch (error) {
        console.log(
          "This is the error of authController > gettingArticleTitle > try-catch ",
          error
        );
      }
    });
  } catch (error) {
    console.log("It is not working!", error);
  }
};

// Review by User to a College
const comment_user_to_college = async (req, res) => {
  try {
    if (!req.body) return null;
    const { comment_by_user, username_for_comment, college_rating, collegeId } =
      req.body;

    // college_id
    const trimmed_college_id = collegeId.trim();

    // comment by user
    const trimmed_comment = comment_by_user.trim();

    // college_rating
    const trimmed_college_rating = college_rating.trim();

    // username
    const trimmed_username = username_for_comment.trim();

    await College.findByIdAndUpdate({ _id: trimmed_college_id }).then(
      (docs) => {
        try {
          const item = docs.college_comment_related.find(
            (item) => item.username == trimmed_username
          );

          if (item) {
            const updateDoc = async () => {
              await College.findOneAndUpdate(
                {
                  _id: trimmed_college_id,
                  "college_comment_related.username": trimmed_username,
                },
                {
                  $set: {
                    "college_comment_related.$.username": trimmed_username,
                    "college_comment_related.$.college_rating":
                      trimmed_college_rating,
                    "college_comment_related.$.comment_about_college":
                      trimmed_comment,
                  },
                }
              );
            };
            updateDoc();
          } else {
            const new_review_is_pushing = async () => {
              await College.findByIdAndUpdate(
                { _id: trimmed_college_id },
                {
                  $push: {
                    college_comment_related: {
                      username: trimmed_username,
                      college_rating: trimmed_college_rating,
                      comment_about_college: trimmed_comment,
                    },
                  },
                },
                {
                  new: true,
                  upsert: true,
                  projection: { _id: 0, __v: 0 },
                }
              ).exec();
            };
            new_review_is_pushing();
          }
        } catch (error) {
          console.log(error);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// User wants to delete his comment
const user_wants_to_delete_his_comment = async (req, res) => {
  try {
    if (!req.body) return null;
    const { username_for_comment, collegeId } = req.body;

    const trimmed_username = username_for_comment.trim();
    const trimmed_collegeId = collegeId.trim();

    await College.findByIdAndUpdate(
      { _id: trimmed_collegeId },
      {
        $pull: {
          college_comment_related: { username: trimmed_username },
        },
      },
      { new: true }
    );
  } catch (error) {
    console.log(error);
  }
};

// Get request for forgot password
const gettingClientOTP_on_mobile = async (req, res) => {
  try {
    return res.render("forgotPassword");
  } catch (error) {
    return;
  }
};

// Post request Client's mobile number for forgot password
const verifyClientOTP_on_mobile = async (req, res) => {
  try {
    if (!req.body) return null;
    const { mobileInputData } = req.body;

    const trimmed_mobileInputData = mobileInputData.trim();

    if (!trimmed_mobileInputData.includes("-")) {
      return res.render("forgotPassword", {
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
      return res.render("forgotPassword", {
        message: "Invalid mobile number!",
      });
    }

    if (isNaN(tested_mobile_number)) {
      return res.render("forgotPassword", {
        message: "Invalid mobile number!",
      });
    }

    const mobileCountryCode = CountryMobileCodeData.filter((item) => {
      return country_code === item.dial_code;
    });

    if (!mobileCountryCode) {
      return res.render("forgotPassword", { message: "Invalid Country Code!" });
    }

    const foundUser = await User.findOne({ tel: tested_mobile_number }).select(
      "-password -username"
    );
    const verification_id = nanoid(4);

    if (foundUser) {
      const user_mobile_number = foundUser.country_code + foundUser.tel;

      let otp = verification_id;
      console.log(otp);

      req.session.userAccount = foundUser;
      req.session.otp_checker_user = otp;
      forgotPasswordVerification(otp, user_mobile_number);

      return res.redirect("/api/accountVerification");
    } else {
      return res.render("forgotPassword", {
        message: "User not found!",
      });
    }
  } catch (error) {
    return res.render("forgotPassword", {
      message: "OTP verification failed!",
    });
  }
};

// Get accountVerification.ejs page
const fillVerificationCodeGetMethod = async (req, res) => {
  try {
    res.render("accountVerification");
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

    if (!(req.session.otp_checker_user === codeFromAccounVerificationPage)) {
      return res.render("accountVerification", { message: "Wrong OTP! " });
    }
    return res.redirect("/api/setPassword");
  } catch (error) {
    return res.render("accountVerification", {
      message: "OTP Verification failed!",
    });
  }
};

// Get setPassword.ejs page
const setPasswordGetMethod = async (req, res) => {
  try {
    return res.render("setPassword");
  } catch (error) {
    return;
  }
};

const setPasswordPostMethod = async (req, res) => {
  try {
    if (!req.body) return null;

    const { firstPassword, secondPassword } = req.body;
    if (!(firstPassword.length >= 7)) {
      return res.render("setPassword", {
        message: "First Password must have atleast 7 characters!",
      });
    }

    if (!(secondPassword.length >= 7)) {
      return res.render("setPassword", {
        message: "Second Password must have atleast 7 characters!",
      });
    }

    // Letter testing
    const regExp = /[a-zA-Z]/g;
    const has_firstPasswordLetter = regExp.test(firstPassword);
    if (!has_firstPasswordLetter) {
      return res.render("setPassword", {
        message: "First Password must include a letter!",
      });
    }

    const has_secondPasswordLetter = regExp.test(secondPassword);
    if (!has_secondPasswordLetter) {
      return res.render("setPassword", {
        message: "First Password must include a letter!",
      });
    }

    // Number testing
    const regex = /\d/;
    const has_firstPasswordNumber = regex.test(firstPassword);
    if (!has_firstPasswordNumber) {
      return res.render("setPassword", {
        message: "First Password must include a number!",
      });
    }

    const has_secondPasswordNumber = regex.test(secondPassword);
    if (!has_secondPasswordNumber) {
      return res.render("setPassword", {
        message: "Second Password must include a number!",
      });
    }

    // Special Character testing
    const specialChars = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
    const has_firstPasswordSpecialCharacter = specialChars.test(firstPassword);
    if (!has_firstPasswordSpecialCharacter) {
      return res.render("setPassword", {
        message: "Password must include an special character!",
      });
    }

    const has_secondPasswordSpecialCharacter =
      specialChars.test(secondPassword);
    if (!has_secondPasswordSpecialCharacter) {
      return res.render("setPassword", {
        message: "Password must include an special character!",
      });
    }

    if (!(firstPassword === secondPassword)) {
      return res.render("setPassword", {
        message: "Passwords are not matching!",
      });
    }

    let userAccount = req.session.userAccount;

    const hashedResetPassword = await securePassword(secondPassword);

    await User.findOneAndUpdate(
      { tel: userAccount.tel },
      { $set: { password: hashedResetPassword } },
      {
        upsert: true,
        new: true,
      }
    );

    return res.redirect("/apipasswordUpdated");
  } catch (error) {
    return res.render("setPassword", { message: "Setting Password failed!" });
  }
};

const passwordMatchingGetMethod = async (req, res) => {
  try {
    res.render("passwordUpdated");
  } catch (error) {
    return;
  }
};

const resendPassword = async (req, res) => {
  try {
    if (!req.body) return null;

    const { resendPassaword } = req.body;

    if (resendPassaword.trim()) {
      const userAccount = req.session.userAccount;
      const user_mobile_number = userAccount.country_code + userAccount.tel;

      const verification_id = nanoid(4);

      let otp = verification_id;
      console.log(otp);

      req.session.otp_checker_user = otp;

      forgotPasswordVerification(otp, user_mobile_number);

      return res.render("accountVerification", {
        message: "Again an OTP has been sent to you!",
      });
    }
  } catch (error) {
    return res.render("forgotPassword", {
      message: "OTP verification failed!",
    });
  }
};

// Update Name of User
const updateName = async (req, res) => {
  try {
    if (!req.body) return null;

    const { name } = req.body;

    await User.findOneAndUpdate(
      { _id: req.session.user_id },
      { $set: { name: name } },
      { returnDocument: "after" }
    );

    return res.status(200).json({ message: "Name updated!" });
  } catch (error) {
    console.log("Error in authController > updateName > try-catch");
    return null;
  }
};

// Update Email for Users
const updateEmail = async (req, res) => {
  try {
    if (!req.body) return null;

    const { email } = req.body;

    const userEmail = await User.findOne({ email });

    if (userEmail) {
      return res.json({ message: "This email is already registered!" });
    }

    await User.findOneAndUpdate(
      { _id: req.session.user_id },
      { $set: { email: email } },
      { returnDocument: "after" }
    );
    return res.status(200).json({ message: "Email-id updated!" });
  } catch (error) {
    console.log("Error in authController > updateEmail > try-catch");
    return null;
  }
};

// Update Mobile for Users
const updateMobile = async (req, res) => {
  try {
    if (!req.body) return null;

    const { mobile } = req.body;

    await User.findOneAndUpdate(
      { _id: req.session.user_id },
      { $set: { tel: mobile } },
      { returnDocument: "after" }
    );
    return res.status(200).json({ message: "Mobile number updated!" });
  } catch (error) {
    console.log("Error in authController > updateMobile > try-catch");
  }
};

// Update Username for User
const updateUsername = async (req, res) => {
  try {
    if (!req.body) return null;

    const { username } = req.body;

    const userUsername = await User.findOne({ username });

    if (userUsername) {
      return res.json({ message: "This username is already registered!" });
    }

    await User.findOneAndUpdate(
      { _id: req.session.user_id },
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

// searchByAdminGetMethod
const searchByAdminGetMethod = async (req, res) => {
  try {
    res.render("admin");
  } catch (error) {
    console.log(
      "This is the error of authController > searchByAdminGetMethod",
      error
    );
  }
};

const gettingAllBlogs = async (req, res) => {
  try {
    const userData = await User.findById({ _id: req.session.user_id });
    const dataTable = await Author.find();
    const advertisement = await Advertisement.find();

    res.render("blogs", {
      user: userData,
      dataTable: dataTable,
      advertisement: advertisement,
    });
  } catch (error) {
    console.log("This is the error of authController > gettingAllBlogs", error);
  }
};

// const gettingAllBlogsForTheMainWebsite = async (req, res) => {
//   try {
//     const dataTable = await Author.find();

//     res.json(dataTable);
//   } catch (error) {
//     console.log("This is the error of authController > gettingAllBlogs", error);
//   }
// };

// Delete User
const deleteUser = async (req, res) => {
  try {
    User.findByIdAndDelete({ _id: req.session.user_id }, req.body).then(
      (user) => {
        delete_Image_from_Cloudinary(user.cloudinary_image_public_id);
        req.session.destroy();
        res.redirect("/api/register");
      }
    );
    return null;
  } catch (error) {
    console.log("This is the error of authController > deleteUser", error);
    return null;
  }
};

module.exports = {
  register,
  insertUser,
  loginLoad,
  verifyLogin,
  loadHome,
  loadProfile,
  loadSettings,
  userLogout,
  previous_years_question_papers_get_method,
  previous_years_question_papers_post_method,
  searchQueryPageGetMethod,
  search_All_Colleges_get_method,
  search_Colleges_Exams_Courses_by_user_post_method,
  engineering_colleges_get_method,
  management_colleges_get_method,
  medical_colleges_get_method,
  designing_colleges_get_method,
  college_information,
  searchPageArticleSavePostMethod,
  // findQueryPageGetMethod,
  // findQueryPagePostMethod,
  deleteUser,
  articleLink,
  gettingArticleTitle,
  star_rating_given_by_user_to_college,
  comment_user_to_college,
  user_wants_to_delete_his_comment,
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
  searchByAdminGetMethod,
  gettingAllBlogs,
};
