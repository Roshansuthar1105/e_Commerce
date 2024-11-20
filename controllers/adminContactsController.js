const Contact = require("../models/contactModel");
// contacts
const allContacts = async (req, res) => {
  try {
    const response = await Contact.find({});
    if (response) {
      if (response.length === 0)
        res.status(200).json([{ message: "No Data Found !" }]);
      else res.status(200).json(response);
    } else {
      res.status(400).json({ message: "Can not get Data !" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = { allContacts };
