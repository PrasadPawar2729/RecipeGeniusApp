const express = require("express")


const cors=require("cors")
const { authRouter } = require("./routes/user.Routes")

const RecipeRouter = require("./routes/recipe.Routes")
const connectToDB = require("./config/db")



const app = express()
require("dotenv").config()


app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
  res.send("home page")
})
app.use("/user",authRouter)

app.use("/recipes",RecipeRouter)





//server 
app.listen(process.env.PORT, async() => {
  try{
    
    connectToDB(process.env.MONGO_URL)
    console.log(`Server is running on port ${process.env.PORT}`)
  }
  catch(err){
    console.log(err)
  }
})