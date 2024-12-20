// =============
//   Auth Page
// =============

const isLogInForUser = (req, res, next) => {
  try {
      if(req.session.user_id) {
          // res.redirect("/profile");
          // console.log(req.session.user_id);
      } else {
          // if(req.session.selectecOption === 'EduWeb_Author') {
              // res.redirect("/homeForAuthor");
          // } else {
              res.redirect("/home");
          // }
      }
      next();
  } catch (error) {
      console.log(error);
  }
}

const isLogOutForUser = (req, res, next) => {
  try {
      if (req.session.user_id) {
          // if(req.session.selectecOption === 'EduWeb_Author') {
              // res.redirect("/homeForAuthor");
          // } else {
              res.redirect("/home");
          // }
      } 
      next();
  } catch (error) {
      console.log(error);
  }
}

module.exports = {
  isLogInForUser,
  isLogOutForUser,
}

