const express=require("express")
const { signup, getuser,login,logout } = require("../controller/authController")
const { auth } = require("../middleware/authmiddleware")

const authRouter=express.Router()


authRouter.post("/signup",signup)
authRouter.get("/",auth,getuser)
authRouter.post("/login",login)
authRouter.post("/logout",logout)


module.exports={authRouter}
