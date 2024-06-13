const recipeModel = require("../model/receipemodel");

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await recipeModel.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//add the recibe and create the recipe
const createRecipes = async (req, res) => {
  try {

    const recipe = await recipeModel.create(req.body);
    res.status(201).json("recipe created successfully");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//update the receipe using id
const updateTheRecipe = async (req, res) => {
  try {
    const recipe = await recipeModel.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    Object.assign(recipe, req.body);
    await recipe.save();
    res.json(recipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//delte the receipe

const deleteTheRecipe = async (req, res) => {
  try {
    await recipeModel.findByIdAndDelete(req.params.id);
    res.status(200).json("recipe deleted successfully");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//search by title
const searchRecipeByTitle = async (req, res) => {
  try {
    const title = req.body.title;
    const searchRecipe = await recipeModel.find({
      title: { $regex: title, $options: "i" },
    });

    res.status(200).json(searchRecipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get the specific recipe using the id

const getRecipeById=async(req,res)=>{
  try{

   const {_id}=req.params;
   const receipe = await recipeModel.find(_id);
   
   if(!receipe){
    return res.status(404).json({
      message:"recipe not found"
    })
   }
   
   
   
   
   
   res.status(200).json(receipe);








  }
  catch(err){
    res.status(500).json({message:err.message})
  }
}









module.exports = {
  getAllRecipes,
  createRecipes,
  updateTheRecipe,
  deleteTheRecipe,
  searchRecipeByTitle,
  getRecipeById,
};
