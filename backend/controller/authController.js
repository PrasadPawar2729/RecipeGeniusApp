const bcrypt=require("bcrypt")
const jwt = require("jsonwebtoken");
const { userModel } = require("../model/usermodel");
require("dotenv").config()



//signup the page
const signup = async(req,res)=>{

  
   const {username,email,password,role}=req.body;
   const saltround=10;

   try{
 

const existuser = await userModel.findOne({email})

if(existuser){
    return res.status(400).send('user already exist')
}

bcrypt.hash(password,saltround,async(err,hash)=>{
    if(err){
        console.log(err)
        res.status(400).send('something went wrong')
    }
    else{

const user= new userModel({username,email,password:hash,role})
await user.save()
res.status(200).send("user registered successfully")

    }
})
    }
    catch(err){
        console.log(err)
        res.status(400).send('something went wrong')
    }




}

//geting the user

const getuser = async(req,res)=>{
    try{
        const user = await userModel.find()
        res.status(200).send(user)
    }
    catch(err){
        console.log(err)
        res.status(400).send('something went wrong')
    }
}

//login the user


const login = async(req,res)=>{
    
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
    
        if (!isValidPassword) {
          return res.status(401).json({ message: "Invalid password" });
        }
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
          expiresIn: "1d",
        });
    
        res.json({ token,role:user.role });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
}


//logout the user
const logout = (req, res) => {
    res.clearCookie("token").json({ message: "Logged out successfully" });
  };












module.exports={signup,getuser,login,logout}
