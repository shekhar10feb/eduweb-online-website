// =======================
//   AuthControllerForUserConselling Page
// =======================

const consellingOfUser = require("../models/consellingOfUser.modals.js");

const postMethodForUserConselling = async (req, res) => {
  try {
    if (!req.body) {
      return null;
    } else {
    const data = JSON.parse(JSON.stringify(req.body));
    const name = data.user;
    const mobile = data.mobile;
    const selectedOption = data.selectedOption;

    const newUserForConsellingData = await consellingOfUser.create({
      name: name,
      tel: mobile,
      selectedOption: selectedOption,
      status: "New",
    });
    newUserForConsellingData.save();
    return res.status(200).json("Thank you for the information. We will contact you soon!");
    }
  } catch (error) {
    console.log(
      "This is the error of postMethodForUserConselling > register",
      error
    );
    return res.status(400).json("Error found!!");
  }
};

module.exports = {
  postMethodForUserConselling,
};
