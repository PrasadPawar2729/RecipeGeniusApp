
const mongoose = require("mongoose");

const connectToDB = async (url) => {
  await mongoose.connect(url);
  console.log("connect to mongoo")
};

module.exports = connectToDB;