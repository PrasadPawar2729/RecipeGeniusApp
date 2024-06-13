const express = require("express");
const RecipeRouter = express.Router();
const access = require("../middleware/accessmiddleware");
const { auth } = require("../middleware/authmiddleware");
const { getAllRecipes, createRecipes, updateTheRecipe, deleteTheRecipe, getRecipeById } = require("../controller/recipeController");
const { searchRecipeByTitle } = require("../controller/recipeController")

RecipeRouter.get("/",getAllRecipes);
RecipeRouter.post("/create",auth,access("admin"),createRecipes)
RecipeRouter.patch("/:id",auth,access("admin"),updateTheRecipe)
RecipeRouter.delete("/:id",auth,access("admin"),deleteTheRecipe)
RecipeRouter.get("/",searchRecipeByTitle)
RecipeRouter.get("/:id",getRecipeById)

module.exports = RecipeRouter;
