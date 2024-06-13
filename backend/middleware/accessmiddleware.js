

const access=(...role)=>{
    return(req,res,next)=>{
        if(role.includes(req.role)){
            next();
        }
        else{
            res.status(401).json({message:"You are not authorized to access this route"})
        }
    }
}

module.exports=access;