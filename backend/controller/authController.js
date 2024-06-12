const bcrypt=require("bcrypt")
// const jwt = require("jsonwebtoken");
const { userModel } = require("../model/usermodel");



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


module.exports={signup,getuser}
