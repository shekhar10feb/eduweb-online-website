// =============
//   AuthForAdmin Page
// =============

const isLogInForAdmin = (req, res, next) => {
  try {
    if (req.session.admin_id) {
      // Admin is logged in, proceed to the next middleware or route handler
      next();
    } else {
      // Admin is not logged in, redirect to login page
      res.redirect("/api/loginForMember");
    }
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("Internal Server Error");
  }
};

const isLogOutForAdmin = (req, res, next) => {
  try {
    if (req.session.admin_id) {
      // Admin is logged in, redirect to admin profile page
      res.redirect("/api/profileForAdmin");
    } else {
      // Admin is not logged in, proceed to the next middleware or route handler
      next();
    }
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  isLogInForAdmin,
  isLogOutForAdmin,
};
