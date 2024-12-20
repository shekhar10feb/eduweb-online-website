// =============
//   Auth Page
// =============

const isLogInForAuthor = (req, res, next) => {
  try {
    if (req.session.author_id) {
      // res.redirect("/profile");
      // console.log(req.session.user_id);
    } else {
      // if(req.session.selectecOption === 'EduWeb_Author') {
      // res.redirect("/homeForAuthor");
      // } else {
      res.redirect("/homeForAuthor");
      // }
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

const isLogOutForAuthor = (req, res, next) => {
  try {
    if (req.session.author_id) {
      // if(req.session.selectecOption === 'EduWeb_Author') {
      // res.redirect("/homeForAuthor");
      // } else {
      res.redirect("/homeForAuthor");
      // }
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  isLogInForAuthor,
  isLogOutForAuthor,
};
