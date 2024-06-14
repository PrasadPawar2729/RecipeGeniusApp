// const mongoose=require("mongoose")
// require("dotenv").config()


// const connectToDB=mongoose.connect(process.env.MONGO_URL,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 30000 
//   })

// module.exports={connectToDB}


const mongoose = require("mongoose");

const connectToDB = async (url) => {
  await mongoose.connect(url);
  console.log("connect to mongoo")
};

module.exports = connectToDB;