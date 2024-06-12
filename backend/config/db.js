const mongoose=require("mongoose")
require("dotenv").config()


const connectToDB=mongoose.connect(process.env.MONGO_URL)

module.exports={connectToDB}