// =============
//   AuthForAdmin Page
// =============

const isLogInForCollege = (req, res, next) => {
    try {
      if (req.session.collegeData_id) {
        // res.redirect("/profile");
        // console.log(req.session.user_id);
      } else {
        // if(req.session.selectecOption === 'EduWeb_Author') {
        // res.redirect("/homeForAuthor");
        // } else {
        res.redirect("/profileForCollege");
        // }
      }
      next();
    } catch (error) {
      console.log(error);
    }
  };
  
  const isLogOutForCollege = (req, res, next) => {
    try {
      if (req.session.collegeData_id) {
        // if(req.session.selectecOption === 'EduWeb_Author') {
        // res.redirect("/homeForAuthor");
        // } else {
        res.redirect("/loginForCollege");
        // }
      }
      next();
    } catch (error) {
      console.log(error);
    }
  };
  
  module.exports = {
    isLogInForCollege,
    isLogOutForCollege,
  };
  