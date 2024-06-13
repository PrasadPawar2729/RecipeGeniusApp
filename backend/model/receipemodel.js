const mongoose = require("mongoose")

const recipeSchema = new mongoose.Schema({

image:{type:String,required:true},
title:{type:String,required:true},
description:String,
ingredients:[String],
instruction:[String],
category:{type:String},
dietaryRestrictions:[String],
healthiness:{
    type:String,
    enum:["high","low","healthy","moderate","Indulgent"]
},
createdBy:{ 
    type:String
    
},
createdAt:{type:Date,default:Date.now},
cookTime:{type:String,required:true},
})


const recipeModel = mongoose.model("Recipes",recipeSchema)


module.exports = recipeModel;
