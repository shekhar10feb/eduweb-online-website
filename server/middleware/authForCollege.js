// =============
//   AuthForAdmin Page
// =============

const isLogInForCollege = (req, res, next) => {
  try {
    if (req.session.collegeData_id) {
      // User is logged in, proceed to the next middleware or route handler
      next();
    } else {
      // User is not logged in, redirect to login page
      res.redirect("/api/loginForCollege");
    }
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("Internal Server Error");
  }
};

const isLogOutForCollege = (req, res, next) => {
  try {
    if (req.session.collegeData_id) {
      // User is logged in, redirect to home page
      res.redirect("/api/homeForCollege");
    } else {
      // User is not logged in, proceed to the next middleware or route handler
      next();
    }
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  isLogInForCollege,
  isLogOutForCollege,
};
