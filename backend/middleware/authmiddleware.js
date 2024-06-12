require("dotenv").config()
const jwt = require("jsonwebtoken")


const auth = async(req,res,next)=>{

const token = req.headers.authorization?.split(" ")[1];

if(token){

    jwt.verify(token,process.env.SECRET_KEY,async(err,decoded)=>{

      if(decoded){
        console.log(decoded);
        next()
       
      }
      else{
        return res.status(401).json({
            messgae:"invalid token"
        })
      }
      
      

    })




}

else{
    return res.status(404).json({
        messgae:"please login first"
    })
}



}



module.exports={auth}