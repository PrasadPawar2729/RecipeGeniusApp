const express = require("express")
const { connectToDB } = require("./config/db")
const cors=require("cors")
const app = express()
require("dotenv").config()


app.use(cors())
app.use(express.json())
app.get("/user", (req, res) => {
  res.send("this is user route")
})




app.listen(process.env.PORT, async() => {
  try{
   await connectToDB
   console.log("db is connected")
    console.log(`Server is running on port ${process.env.PORT}`)
  }
  catch(err){
    console.log(err)
  }
})