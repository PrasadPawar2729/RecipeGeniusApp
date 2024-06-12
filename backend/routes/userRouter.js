const express=require("express")
const { signup, getuser } = require("../controller/authController")
const authRouter=express.Router()


authRouter.post("/signup",signup)
authRouter.get("/users",getuser)

module.exports={authRouter}
