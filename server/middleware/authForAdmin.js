// =============
//   AuthForAdmin Page
// =============

const isLogInForAdmin = (req, res, next) => {
    try {
      if (req.session.admin_id) {
        // res.redirect("/profile");
        // console.log(req.session.user_id);
      } else {
        // if(req.session.selectecOption === 'EduWeb_Author') {
        // res.redirect("/homeForAuthor");
        // } else {
        res.redirect("/profileForAdmin");
        // }
      }
      next();
    } catch (error) {
      console.log(error);
    }
  };
  
  const isLogOutForAdmin = (req, res, next) => {
    try {
      if (req.session.admin_id) {
        // if(req.session.selectecOption === 'EduWeb_Author') {
        // res.redirect("/homeForAuthor");
        // } else {
        res.redirect("/loginForMember");
        // }
      }
      next();
    } catch (error) {
      console.log(error);
    }
  };
  
  module.exports = {
    isLogInForAdmin,
    isLogOutForAdmin,
  };
  