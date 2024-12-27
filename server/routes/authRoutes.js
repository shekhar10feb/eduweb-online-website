// ===========================
//   authRoutes.js Page
// ===========================
const express = require("express");
const router = express.Router();
const userController = require("../controller/authControllerForUser");
const userControllerForAuthor = require("../controller/authControllerForAuthor");
const userControllerForMember = require("../controller/authControllerForMember");
const userControllerForCollege = require("../controller/authControllerForCollege.js");
const userControllerForUserConselling = require("../controller/authControllerForUserConselling");
const Author = require("../models/author.models");
const auth = require("../middleware/auth");
const authForAuthor = require("../middleware/authForAuthor");
const authForMember = require("../middleware/authForMember");
const authForAdmin = require("../middleware/authForAdmin");
const authForCollege = require("../middleware/authForCollege");
// const multerForUser = require("../middleware/multerForUser");
const {
  multerUploadForUser,
  multerForUserErrorHandler,
} = require("../middleware/multerForUser");
// const multerForAuthor = require("../middleware/multerForAuthor");
const {
  multerUploadForAuthor,
  multerForAuthorErrorHandler,
} = require("../middleware/multerForAuthor");
// const multer_for_member_for_registration = require("../middleware/multer_for_member_for_registration.js");
const {
  multer_for_member_for_registration,
  multerForMemberForRegistrationErrorHandler,
} = require("../middleware/multer_for_member_for_registration.js");
const uploadQuestionPapers = require("../middleware/uploadingQuestionPapers");
const  {
  multerUploadForUploadQuestionPapers,
  multerForUploadQuestionPapersErrorHandler,
} = require("../middleware/uploadingQuestionPapers");
// const upload_Ads = require("../middleware/upload_Ads");
const {
  upload_Ads,
  multerForUpload_AdsErrorHandler,
} = require("../middleware/upload_Ads");
const multer = require("multer");
const cacheControl = require("../middleware/cacheControl");

// For home.ejs > search_All_Colleges
const search_All_Colleges_post_method_multer = multer();

// For home.ejs > previous_years_question_papers.ejs
const previous_years_question_papers_post_method_multer = multer();

// For College Profile > College Rank
const post_engineering_rank_college_info = multer();
const post_medical_rank_college_info = multer();
const post_management_rank_college_info = multer();
const post_law_rank_college_info = multer();
const post_fashion_design_rank_college_info = multer();
const post_pharmacy_rank_college_info = multer();
const post_overall_rank_college_info = multer();

// For College Profile > Particulars
const post_short_name_college_info = multer();
const post_institute_type_college_info = multer();
const post_courses_offered_college_info = multer();
const post_college_campus_college_info = multer();
const post_university_college_info = multer();
const post_approvals_college_info = multer();
const post_ownership_college_info = multer();
const post_college_admission_college_info = multer();
const post_entrance_exam_college_info = multer();

// For College Profile > College Contact Information
const post_contact_college_info = multer();
const post_city_college_info = multer();
const post_website_college_info = multer();
const post_state_or_ut_name_college_info = multer();
const post_district_name_college_info = multer();
const post_email_college_info = multer();

// For College Profile > College Fees
const post_engineering_fees_college_info = multer();
const post_medical_fees_college_info = multer();
const post_management_fees_college_info = multer();
const post_law_fees_college_info = multer();
const post_fashion_design_fees_college_info = multer();
const post_pharmacy_fees_college_info = multer();

// For College Profile > Files
// const {
//   multerForCollegeCoverImage,
//   multerForCollegeProfileImage,
//   multerForCollegeDetailsBrochure,
// } = require("../middleware/multerForCollegeImages.js");
// const cacheControl = require("../middleware/cacheControl.js");
const {
  multerUploadForCollegeCoverImage,
  multerForCollegeCoverImageErrorHandler,
  multerUploadForCollegeProfileImage,
  multerForCollegeProfileImageErrorHandler,
  multerUploadForCollegeBrochure,
  multerForCollegeBrochureErrorHandler,
} = require("../middleware/multerForCollegeImages.js");

// For College Profile > News, Events and Description
const post_latest_news_and_events_college_info = multer();
const post_description_college_info = multer();

// For Admin
const conselling_of_user_status_by_Member_multer = multer();
const delete_User_By_Admin_multer = multer();
const delete_Conselling_of_User_By_Admin_multer = multer();
const delete_Author_By_Admin_multer = multer();
const delete_Member_By_Admin_multer = multer();
const preference_process_multer = multer();
const verification_process_multer = multer();
const delete_College_By_Admin_multer = multer();

// For Settings of College
const updateNameForCollege_multer = multer();
const updateMobileForCollege_multer = multer();
const updateUsernameForCollege_multer = multer();
const updateEmailForCollege_multer = multer();

// For deleting Ads by Admin
const delete_Ads_By_Admin_multer = multer();
const delete_Question_paper_by_Admin_multer = multer();

// For rating and comment given by User to College
const star_rating_given_by_user_to_college_multer = multer();
const comment_user_to_college_multer = multer();
const user_wants_to_delete_his_comment_multer = multer();

// For Uploading FAQs by member
const uploadingFAQs_by_member_multer = multer();
const deleteFAQ_by_member_multer = multer();

// ===============
//     ROUTES
// ===============

// <--------------------------->
// <----- Routes for User ----->
// <--------------------------->

// Register Route for User using get method
router.get("/register", auth.isLogOutForUser, userController.register);

// Register Route for User using post method
// router.post(
//   "/register",
//   multerForUser.fields([
//     {
//       name: "profile_image",
//       maxCount: 1,
//     },
//     {
//       name: "cover_image",
//       maxCount: 1,
//     },
//   ]),
//   userController.insertUser
// );

router.post(
  "/register",
  multerUploadForUser,
  multerForUserErrorHandler,
  userController.insertUser
);

// get method for user login route
router.get("/login", userController.loginLoad);

// post method for user login route
router.post("/login", userController.verifyLogin);

// get method for user home route
router.get("/home", auth.isLogInForUser, cacheControl, userController.loadHome);

// get method for user profile route
router.get(
  "/profile",
  auth.isLogInForUser,
  cacheControl,
  userController.loadProfile
);

// get method for user settings route
router.get(
  "/settings",
  auth.isLogInForUser,
  cacheControl,
  userController.loadSettings
);

// post method for user updateName route
router.post("/updateName", auth.isLogInForUser, userController.updateName);

// post method for user updateUsername route
router.post(
  "/updateUsername",
  auth.isLogInForUser,
  userController.updateUsername
);

// post method for user updateEmail route
router.post("/updateEmail", auth.isLogInForUser, userController.updateEmail);

// post method for user updateMobile route
router.post("/updateMobile", auth.isLogInForUser, userController.updateMobile);

// post method for user gettingArticleForSearchPage route
router.post(
  "/gettingArticleForSearchPage",
  userController.searchPageArticleSavePostMethod
);

// post method for user gettingArticle route
router.post("/gettingArticle", auth.isLogInForUser, userController.articleLink);

// post method for user gettingArticleTitle route
router.post(
  "/gettingArticleTitle",
  auth.isLogInForUser,
  userController.gettingArticleTitle
);

router.get(
  "/previous_years_question_papers",
  auth.isLogInForUser,
  userController.previous_years_question_papers_get_method
);
router.post(
  "/previous_years_question_papers",
  previous_years_question_papers_post_method_multer.none(),
  auth.isLogInForUser,
  userController.previous_years_question_papers_post_method
);

router.post(
  "/search_Colleges_Exams_Courses_by_user",
  search_All_Colleges_post_method_multer.none(),
  auth.isLogInForUser,
  userController.search_Colleges_Exams_Courses_by_user_post_method
);

router.get(
  "/search_All_Colleges",
  // auth.isLogInForUser,
  userController.search_All_Colleges_get_method
);

router.get(
  "/search_All_Colleges/:name",
  auth.isLogInForUser,
  userController.college_information
);

router.get(
  "/engineering_colleges",
  // auth.isLogInForUser,
  userController.engineering_colleges_get_method
);

router.get(
  "/management_colleges",
  // auth.isLogInForUser,
  userController.management_colleges_get_method
);

router.get(
  "/medical_colleges",
  // auth.isLogInForUser,
  userController.medical_colleges_get_method
);

router.get(
  "/designing_colleges",
  // auth.isLogInForUser,
  userController.designing_colleges_get_method
);

router.post(
  "/star_rating_given_by_user_to_college",
  star_rating_given_by_user_to_college_multer.none(),
  auth.isLogInForUser,
  userController.star_rating_given_by_user_to_college
);

router.post(
  "/comment_user_to_college",
  comment_user_to_college_multer.none(),
  auth.isLogInForUser,
  userController.comment_user_to_college
);

// User wants to delete his comment
router.post(
  "/user_wants_to_delete_his_comment",
  user_wants_to_delete_his_comment_multer.none(),
  auth.isLogInForUser,
  userController.user_wants_to_delete_his_comment
);

// get method for user blogs route
router.get(
  "/blogs",
  auth.isLogInForUser,
  cacheControl,
  userController.gettingAllBlogs
);

// get method for user forgotPassword route
router.get(
  "/forgotPassword",
  auth.isLogOutForUser,
  userController.gettingClientOTP_on_mobile
);

// post method for user forgotPassword route
router.post(
  "/forgotPassword",
  auth.isLogOutForUser,
  userController.verifyClientOTP_on_mobile
);

// get method for user accountVerification route
router.get(
  "/accountVerification",
  auth.isLogOutForUser,
  userController.fillVerificationCodeGetMethod
);

// post method for user accountVerification route
router.post(
  "/accountVerification",
  auth.isLogOutForUser,
  userController.fillVerificationCodePostMethod
);

// get method for user setPassword route
router.get(
  "/setPassword",
  auth.isLogOutForUser,
  userController.setPasswordGetMethod
);

// post method for user setPassword route
router.post(
  "/setPassword",
  auth.isLogOutForUser,
  userController.setPasswordPostMethod
);

// get method for user passwordUpdated route
router.get(
  "/passwordUpdated",
  auth.isLogOutForUser,
  userController.passwordMatchingGetMethod
);

router.post(
  "/resendPasswordForUser",
  auth.isLogOutForUser,
  userController.resendPassword
);

// get method for user logout route
router.get("/logout", auth.isLogInForUser, userController.userLogout);

// post method for user deleteUserAccount route
router.post(
  "/deleteUserAccount/:id",
  auth.isLogInForUser,
  userController.deleteUser
);
// <----- End of Routes for User ----->

// <----------------------------->
// <----- Routes for Author ----->
// <----------------------------->

// Register Route for User using get method
router.get(
  "/registerForAuthor",
  authForAuthor.isLogOutForAuthor,
  userControllerForAuthor.register
);

// Register Route for User using post method
// router.post(
//   "/registerForAuthor",
//   multerForAuthor.fields([
//     {
//       name: "profile_image",
//       maxCount: 1,
//     },
//     {
//       name: "coverImage",
//       maxCount: 1,
//     },
//   ]),
//   userControllerForAuthor.insertAuthor
// );

router.post(
  "/registerForAuthor",
  multerUploadForAuthor,
  multerForAuthorErrorHandler,
  userControllerForAuthor.insertAuthor
);

// get method for loginForAuthor route
router.get(
  "/loginForAuthor",
  authForAuthor.isLogOutForAuthor,
  userControllerForAuthor.loginLoad
);

// post method for loginForAuthor route
router.post(
  "/loginForAuthor",
  authForAuthor.isLogOutForAuthor,
  userControllerForAuthor.verifyLogin
);

// get method for profileForAuthor route
router.get(
  "/profileForAuthor",
  cacheControl,
  authForAuthor.isLogInForAuthor,
  userControllerForAuthor.loadProfile
);

// get method for settingsForAuthor route
router.get(
  "/settingsForAuthor",
  cacheControl,
  authForAuthor.isLogInForAuthor,
  userControllerForAuthor.loadSettings
);

// post method for updateNameForAuthor route
router.post(
  "/updateNameForAuthor",
  authForAuthor.isLogInForAuthor,
  userControllerForAuthor.updateName
);

// post method for updateUsernameForAuthor route
router.post(
  "/updateUsernameForAuthor",
  authForAuthor.isLogInForAuthor,
  userControllerForAuthor.updateUsername
);

// post method for updateEmailForAuthor route
router.post(
  "/updateEmailForAuthor",
  authForAuthor.isLogInForAuthor,
  userControllerForAuthor.updateEmail
);

// post method for updateMobileForAuthor route
router.post(
  "/updateMobileForAuthor",
  authForAuthor.isLogInForAuthor,
  userControllerForAuthor.updateMobile
);

// post method for gettingBlogTitle route
router.post(
  "/gettingBlogTitle",
  authForAuthor.isLogInForAuthor,
  userControllerForAuthor.gettingBlogTitle
);

// post method for postBlogByAuthor route
router.post(
  "/postBlogByAuthor",
  authForAuthor.isLogInForAuthor,
  userControllerForAuthor.postBlogByAuthorPostMethod
);

// get method for blogsForAuthor route
router.get(
  "/blogsForAuthor",
  authForAuthor.isLogInForAuthor,
  userControllerForAuthor.gettingAllBlogs
);

// get method for Author forgotPassword route
router.get(
  "/forgotPasswordForAuthor",
  authForAuthor.isLogOutForAuthor,
  userControllerForAuthor.gettingClientOTP_on_mobile
);

// post method for Author forgotPassword route
router.post(
  "/forgotPasswordForAuthor",
  authForAuthor.isLogOutForAuthor,
  userControllerForAuthor.verifyClientOTP_on_mobile
);

// get method for user accountVerification route
router.get(
  "/accountVerificationForAuthor",
  authForAuthor.isLogOutForAuthor,
  userControllerForAuthor.fillVerificationCodeGetMethod
);

// post method for user accountVerification route
router.post(
  "/accountVerificationForAuthor",
  authForAuthor.isLogOutForAuthor,
  userControllerForAuthor.fillVerificationCodePostMethod
);

// get method for user setPassword route
router.get(
  "/setPasswordForAuthor",
  authForAuthor.isLogOutForAuthor,
  userControllerForAuthor.setPasswordGetMethod
);

// post method for user setPassword route
router.post(
  "/setPasswordForAuthor",
  authForAuthor.isLogOutForAuthor,
  userControllerForAuthor.setPasswordPostMethod
);

// get method for user passwordUpdated route
router.get(
  "/passwordUpdatedForAuthor",
  authForAuthor.isLogOutForAuthor,
  userControllerForAuthor.passwordMatchingGetMethod
);

router.post(
  "/resendPasswordForAuthor",
  authForAuthor.isLogOutForAuthor,
  userControllerForAuthor.resendPassword
);

// delete_User_By_Member
router.post(
  "/delete_User_By_Member",
  authForMember.isLogInForMember,
  userControllerForMember.delete_User_By_Member
);

// delete_Conselling_of_User_By_Member
router.post(
  "/delete_Conselling_of_User_By_Member",
  authForMember.isLogInForMember,
  userControllerForMember.delete_Conselling_of_User_By_Member
);

// delete_Author_By_Member
router.post(
  "/delete_Author_By_Member",
  authForMember.isLogInForMember,
  userControllerForMember.delete_Author_By_Member
);

// get method for logoutForAuthor route
router.get(
  "/logoutForAuthor",
  authForAuthor.isLogInForAuthor,
  userControllerForAuthor.authorLogout
);

// post method for deleteAuthorAccount route
router.post(
  "/deleteAuthorAccount/:id",
  authForAuthor.isLogInForAuthor,
  userControllerForAuthor.deleteUser
);
// <----- End of Routes for Author -----> //

// <----------------------------->
// <----- Routes for Member ----->
// <----------------------------->

// get method for member registerForMember
router.get(
  "/registerForMember",
  authForMember.isLogOutForMember,
  userControllerForMember.register
);

// post method for member registerForMember
router.post(
  "/registerForMember",
  multer_for_member_for_registration,
  multerForMemberForRegistrationErrorHandler,
  userControllerForMember.insertMemberFromMainWebsite
);

// get method for member loginForMember
router.get(
  "/loginForMember",
  authForMember.isLogOutForMember,
  userControllerForMember.loginLoad
);

// post method for member loginForMember
router.post(
  "/loginForMember",
  authForMember.isLogOutForMember,
  userControllerForMember.verifyLogin
);

// get method for member profileForMember
router.get(
  "/profileForMember",
  authForMember.isLogInForMember,
  cacheControl,
  userControllerForMember.loadProfile
);

// get method for member settingsForMember
router.get(
  "/settingsForMember",
  authForMember.isLogInForMember,
  cacheControl,
  userControllerForMember.loadSettings
);

// post method for member updateNameForMember
router.post(
  "/updateNameForMember",
  authForMember.isLogInForMember,
  userControllerForMember.updateName
);

// post method for member updateMobileForMember
router.post(
  "/updateMobileForMember",
  authForMember.isLogInForMember,
  userControllerForMember.updateMobile
);

// post method for member updateUsernameForMember
router.post(
  "/updateUsernameForMember",
  authForMember.isLogInForMember,
  userControllerForMember.updateUsername
);

// post method for member updateEmailForMember
router.post(
  "/updateEmailForMember",
  authForMember.isLogInForMember,
  userControllerForMember.updateEmail
);

// get method for member logoutForMember
router.get(
  "/logoutForMember",
  authForMember.isLogInForMember,
  userControllerForMember.memberLogout
);

// post method for member conselling_of_user_status
router.post(
  "/conselling_of_user_status",
  conselling_of_user_status_by_Member_multer.none(),
  userControllerForMember.conselling_of_user_status
);

router.post(
  "/uploadingQuestionPaperByAdmin",
  multerUploadForUploadQuestionPapers,
  multerForUploadQuestionPapersErrorHandler,
  userControllerForMember.uploading_question_paper
);

router.get(
  "/getting_question_papers",
  userControllerForMember.getQuestionPaper
);

router.post(
  "/uploadingFAQs",
  uploadingFAQs_by_member_multer.none(),
  userControllerForMember.uploading_FAQs_by_member
);

router.get("/api/getting_FAQs", userControllerForMember.getFAQs_by_member);

// get method for Member forgotPassword route
router.get(
  "/forgotPasswordForMember",
  authForMember.isLogOutForMember,
  userControllerForMember.gettingClientOTP_on_mobile
);

// post method for Member forgotPassword route
router.post(
  "/forgotPasswordForMember",
  authForMember.isLogOutForMember,
  userControllerForMember.verifyClientOTP_on_mobile
);

// get method for user accountVerification route
router.get(
  "/accountVerificationForMember",
  authForMember.isLogOutForMember,
  userControllerForMember.fillVerificationCodeGetMethod
);

// post method for user accountVerification route
router.post(
  "/accountVerificationForMember",
  authForMember.isLogOutForMember,
  userControllerForMember.fillVerificationCodePostMethod
);

// get method for user setPassword route
router.get(
  "/setPasswordForMember",
  authForMember.isLogOutForMember,
  userControllerForMember.setPasswordGetMethod
);

// post method for user setPassword route
router.post(
  "/setPasswordForMember",
  authForMember.isLogOutForMember,
  userControllerForMember.setPasswordPostMethod
);

// get method for user passwordUpdated route
router.get(
  "/passwordUpdatedForMember",
  authForMember.isLogOutForMember,
  userControllerForMember.passwordMatchingGetMethod
);

router.post(
  "/resendPasswordForMember",
  authForMember.isLogOutForMember,
  userControllerForMember.resendPassword
);

router.post(
  "/delete_FAQ_by_member",
  authForMember.isLogInForMember,
  deleteFAQ_by_member_multer.none(),
  userControllerForMember.deleteFAQ_by_member
);

router.post(
  "/uploading_ads",
  upload_Ads,
  multerForUpload_AdsErrorHandler,
  userControllerForMember.post_Method_Of_advertisement
);

router.get(
  "/getting_uploading_ads",
  userControllerForMember.getting_advertisement_ads
);

router.post(
  "/deleteMemberAccount/:id",
  authForMember.isLogInForMember,
  userControllerForMember.deleteMemberAccount
);

// <----- End of Routes for Member -----> //

// <----------------------------->
// <----- Routes for Admin ------>
// <----------------------------->

// Profile for Admin
router.get(
  "/profileForAdmin",
  authForAdmin.isLogInForAdmin,
  cacheControl,
  userControllerForMember.loadProfileForAdmin
);

router.get(
  "/settingsForAdmin",
  authForAdmin.isLogInForAdmin,
  cacheControl,
  userControllerForMember.loadSettingsForAdmin
);

router.post(
  "/updateNameForAdmin",
  authForAdmin.isLogInForAdmin,
  userControllerForMember.updateNameForAdmin
);

router.post(
  "/updateEmailForAdmin",
  authForAdmin.isLogInForAdmin,
  userControllerForMember.updateEmailForAdmin
);

router.post(
  "/updateUsernameForAdmin",
  authForAdmin.isLogInForAdmin,
  userControllerForMember.updateUsernameForAdmin
);

router.post(
  "/updateMobileForAdmin",
  authForAdmin.isLogInForAdmin,
  userControllerForMember.updateMobileForAdmin
);

// delete_User_By_Admin
router.post(
  "/delete_User_By_Admin",
  delete_User_By_Admin_multer.none(),
  authForAdmin.isLogInForAdmin,
  userControllerForMember.delete_User_By_Admin
);

// delete_Conselling_of_User_By_Admin
router.post(
  "/delete_Conselling_of_User_By_Admin",
  delete_Conselling_of_User_By_Admin_multer.none(),
  authForAdmin.isLogInForAdmin,
  userControllerForMember.delete_Conselling_of_User_By_Admin
);

// delete_Author_By_Admin
router.post(
  "/delete_Author_By_Admin",
  delete_Author_By_Admin_multer.none(),
  authForAdmin.isLogInForAdmin,
  userControllerForMember.delete_Author_By_Admin
);

// delete_Member_By_Admin
router.post(
  "/delete_Member_By_Admin",
  delete_Member_By_Admin_multer.none(),
  authForAdmin.isLogInForAdmin,
  userControllerForMember.delete_Member_By_Admin
);

router.post(
  "/college_preference",
  preference_process_multer.none(),
  authForAdmin.isLogInForAdmin,
  userControllerForMember.college_preference
);

router.post(
  "/college_verification_process",
  verification_process_multer.none(),
  authForAdmin.isLogInForAdmin,
  userControllerForMember.college_verification_process
);

// delete_Member_By_Admin
router.post(
  "/delete_College_By_Admin",
  delete_College_By_Admin_multer.none(),
  authForAdmin.isLogInForAdmin,
  userControllerForMember.delete_College_By_Admin
);

// delete_Question_paper_by_Admin
router.post(
  "/delete_Question_paper_by_Admin",
  delete_Question_paper_by_Admin_multer.none(),
  authForAdmin.isLogInForAdmin,
  userControllerForMember.delete_Question_paper_by_Admin
);

// delete_Ads_By_Admin
router.post(
  "/delete_Ads_By_Admin",
  delete_Ads_By_Admin_multer.none(),
  authForAdmin.isLogInForAdmin,
  userControllerForMember.deleteAdsByAdmin
);

router.post(
  "/registerForMemberFromAdmin",
  multer_for_member_for_registration,
  multerForMemberForRegistrationErrorHandler,
  userControllerForMember.insertMemberFromAdmin
);

router.get(
  "/logoutForAdmin",
  authForAdmin.isLogInForAdmin,
  userControllerForMember.adminLogout
);

// <----- End of Routes for Admin -----> //

// <------------------------------>
// <----- Routes for College ----->
// <------------------------------>

// Register Route for college using get method
router.get(
  "/registerForCollege",
  authForCollege.isLogOutForCollege,
  userControllerForCollege.register
);

// Register Route for college using post method
router.post(
  "/registerForCollege",
  // multerForCollege.single("cover_image"),
  // multerForCollege.fields([
  //   { name: 'profile_image', maxCount: 1 },
  // ]),
  multerUploadForCollegeProfileImage,
  multerForCollegeProfileImageErrorHandler,
  userControllerForCollege.insertCollege
);

// get method for user login route
router.get("/loginForCollege", userControllerForCollege.loginLoad);

// post method for user login route
router.post("/loginForCollege", userControllerForCollege.verifyLogin);

// get method for user profile route
router.get(
  "/profileForCollege",
  authForCollege.isLogInForCollege,
  cacheControl,
  userControllerForCollege.loadCollegeProfile
);

// post method for College updateNameForCollege
router.post(
  "/updateNameForCollege",
  updateNameForCollege_multer.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.updateName
);

// post method for College updateMobileForCollege
router.post(
  "/updateMobileForCollege",
  updateMobileForCollege_multer.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.updateMobile
);

// post method for College updateUsernameForCollege
router.post(
  "/updateUsernameForCollege",
  updateUsernameForCollege_multer.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.updateUsername
);

// post method for College updateEmailForCollege
router.post(
  "/updateEmailForCollege",
  updateEmailForCollege_multer.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.updateEmail
);

// For College Profile > College Rank
router.post(
  "/post_engineering_rank_college_info",
  post_engineering_rank_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_engineering_rank_college_info
);

router.post(
  "/post_medical_rank_college_info",
  post_medical_rank_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_medical_rank_college_info
);

router.post(
  "/post_management_rank_college_info",
  post_management_rank_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_management_rank_college_info
);

router.post(
  "/post_law_rank_college_info",
  post_law_rank_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_law_rank_college_info
);

router.post(
  "/post_law_rank_college_info",
  post_law_rank_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_law_rank_college_info
);

router.post(
  "/post_fashion_design_rank_college_info",
  post_fashion_design_rank_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_fashion_design_rank_college_info
);

router.post(
  "/post_fashion_design_rank_college_info",
  post_fashion_design_rank_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_fashion_design_rank_college_info
);

router.post(
  "/post_pharmacy_rank_college_info",
  post_pharmacy_rank_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_pharmacy_rank_college_info
);

router.post(
  "/post_overall_rank_college_info",
  post_overall_rank_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_overall_rank_college_info
);

router.post(
  "/post_short_name_college_info",
  post_short_name_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_short_name_college_info
);

router.post(
  "/post_institute_type_college_info",
  post_institute_type_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_institute_type_college_info
);

router.post(
  "/post_courses_offered_college_info",
  post_courses_offered_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_courses_offered_college_info
);

router.post(
  "/post_college_campus_college_info",
  post_college_campus_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_college_campus_college_info
);

router.post(
  "/post_university_college_info",
  post_university_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_university_college_info
);

router.post(
  "/post_approvals_college_info",
  post_approvals_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_approvals_college_info
);

router.post(
  "/post_ownership_college_info",
  post_ownership_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_ownership_college_info
);

router.post(
  "/post_college_admission_college_info",
  post_college_admission_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_college_admission_college_info
);

router.post(
  "/post_entrance_exam_college_info",
  post_entrance_exam_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_entrance_exam_college_info
);

// For College Profile > College Contact Information
router.post(
  "/post_contact_college_info",
  post_contact_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_contact_college_info
);

router.post(
  "/post_city_college_info",
  post_city_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_city_college_info
  // async (req, res) => {
  //   try {
  //     if (!req.body) return null;
  //     console.log("It is working!");
  //   } catch (error) {
  //     console.log("Error: ", error);
  //   }
  // }
);

router.post(
  "/post_website_college_info",
  post_website_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_website_college_info
);

router.post(
  "/post_state_or_ut_name_college_info",
  post_state_or_ut_name_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_state_or_ut_name_college_info
);

router.post(
  "/post_district_name_college_info",
  post_district_name_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_district_name_college_info
);

router.post(
  "/post_email_college_info",
  post_email_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_email_college_info
);

// For College Profile > College Fees
router.post(
  "/post_engineering_fees_college_info",
  post_engineering_fees_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_engineering_fees_college_info
);

router.post(
  "/post_medical_fees_college_info",
  post_medical_fees_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_medical_fees_college_info
);

router.post(
  "/post_management_fees_college_info",
  post_management_fees_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_management_fees_college_info
);

router.post(
  "/post_law_fees_college_info",
  post_law_fees_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_law_fees_college_info
);

router.post(
  "/post_fashion_design_fees_college_info",
  post_fashion_design_fees_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_fashion_design_fees_college_info
);

router.post(
  "/post_pharmacy_fees_college_info",
  post_pharmacy_fees_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_pharmacy_fees_college_info
);

// For College Profile > Files
router.post(
  "/post_profile_image_college_info",
  multerUploadForCollegeProfileImage,
  multerForCollegeProfileImageErrorHandler,
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_profile_image_college_info
  // async (req, res) => {
  //   console.log("It is working!");
  // }
);

router.post(
  "/post_cover_image_college_info",
  multerUploadForCollegeCoverImage,
  multerForCollegeCoverImageErrorHandler,
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_cover_image_college_info
  // async (req, res) => {
  //   console.log("It is working!");
  // }
);

router.post(
  "/post_college_details_brochure_college_info",
  multerUploadForCollegeBrochure,
  multerForCollegeBrochureErrorHandler,
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_college_details_brochure_college_info
  // async (req, res) => {
  //   console.log("It is working!");
  // }
);

// For College Profile > News, Events and Description
router.post(
  "/post_latest_news_and_events_college_info",
  post_latest_news_and_events_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_latest_news_and_events_college_info
  // async (req, res) => {
  //   console.log("It is working!");
  // }
);

router.post(
  "/post_description_college_info",
  post_description_college_info.none(),
  authForCollege.isLogInForCollege,
  userControllerForCollege.post_description_college_info
  // async (req, res) => {
  //   console.log("It is working!");
  // }
);

router.get(
  "/settingsForCollege",
  authForCollege.isLogInForCollege,
  cacheControl,
  userControllerForCollege.loadSettingsForCollege
);

router.get(
  "/logoutForCollege",
  authForCollege.isLogInForCollege,
  userControllerForCollege.collegeLogout
);

// get method for College forgotPassword route
router.get(
  "/forgotPasswordForCollege",
  authForCollege.isLogOutForCollege,
  userControllerForCollege.gettingClientOTP_on_mobile
);

// post method for College forgotPassword route
router.post(
  "/forgotPasswordForCollege",
  authForCollege.isLogOutForCollege,
  userControllerForCollege.verifyClientOTP_on_mobile
);

// get method for user accountVerification route
router.get(
  "/accountVerificationForCollege",
  authForCollege.isLogOutForCollege,
  userControllerForCollege.fillVerificationCodeGetMethod
);

// post method for user accountVerification route
router.post(
  "/accountVerificationForCollege",
  authForCollege.isLogOutForCollege,
  userControllerForCollege.fillVerificationCodePostMethod
);

// get method for user setPassword route
router.get(
  "/setPasswordForCollege",
  authForCollege.isLogOutForCollege,
  userControllerForCollege.setPasswordGetMethod
);

// post method for user setPassword route
router.post(
  "/setPasswordForCollege",
  authForCollege.isLogOutForCollege,
  userControllerForCollege.setPasswordPostMethod
);

// get method for user passwordUpdated route
router.get(
  "/passwordUpdatedForCollege",
  authForCollege.isLogOutForCollege,
  userControllerForCollege.passwordMatchingGetMethod
);

router.post(
  "/resendPasswordForCollege",
  authForCollege.isLogOutForCollege,
  userControllerForCollege.resendPassword
);

router.post(
  "/deleteCollegeAccount/:id",
  authForCollege.isLogInForCollege,
  userControllerForCollege.deleteCollegeAccount
);

// <----- End of Routes for College -----> //

// <--------------------------------------->
// <----- Route for Main Website ----->
// <--------------------------------------->

// Sending All Colleges from database to Main Website
router.get(
  "/getting_List_of_Colleges",
  userControllerForCollege.getting_List_of_Colleges
);

// Find Route for Main Website
// router.post(
//   "/find_query_by_user_from_main_website",
//   userController.findQueryPagePostMethod
// );
// router.get("/find", userController.findQueryPageGetMethod);

// Blogs Route for Main Website
// router.get("/updatedBlogs", userControllerForAuthor.gettingAllBlogsForTheMainWebsite);
router.get("/updatedBlogs", async (req, res) => {
  try {
    const dataTable = await Author.find();
    // console.log("Here are the total blogs, which you are getting: ", dataTable);
    res.json(dataTable);
  } catch (error) {
    console.log(
      "This is the error of updatedBlogs for the Main Website in authRoutes.js",
      error
    );
  }
});

// To get the information for User Conselling from Main Website
router.post(
  "/postMethodForUserConselling",
  userControllerForUserConselling.postMethodForUserConselling
);

// To pass the news api from backend to frontend using server
router.get("/eduweb-news", async (req, res) => {
  try {
    // newsdata.io
    const url = `${process.env.MONTY_NEWS_API}`;

    const reports = async (url) => {
      try {
        await fetch(url)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            res.json(data.results);
          })
          .catch((err) => {
            return null;
          });
      } catch (error) {
        return null;
      }
    };
    reports(url);
  } catch (error) {
    console.log(error);
  }
});

// User Already Exists Route
router.get("/user_already_exists", (req, res) => {
  res.render("user_already_exists");
});

// Terms & Conditions Route
router.get("/TermsAndConditions", (req, res) => {
  res.render("termsAndConditions");
});

// Privacy Policy Route
router.get("/PrivacyPolicy", (req, res) => {
  res.render("privacyPolicy");
});

// Error Route
router.get("/*", (req, res) => {
  res.status(404).render("error");
});

// Error handling middleware for routes
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

module.exports = router;
