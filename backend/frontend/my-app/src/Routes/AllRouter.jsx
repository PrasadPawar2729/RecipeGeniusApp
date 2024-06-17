import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
// import Signup from "../pages/Signup/Signup"
import Dashboard from "../pages/Dashboard/Dash"
import RecipeData from "../components/RecipeDetail"
import Favorite from "../pages/Favourite/Fav"
import SearchResults from "../components/SearchRes"
import Favorites from "../pages/Favourite/Fav"
import AboutUs from "../pages/About/About"
import ContactUs from "../pages/Contact/Contact"
// import ContactUs from "../components/ContactUs"
// import Favorite from "../pages/Favourite/Fav"



export const AllRouter=()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/login-signup" element={<Login />} />
          <Route path="/recipe-data/:id" element={<RecipeData />} />
          <Route path="/my-recipetin" element={<Favorite />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<AboutUs />} />

          <Route path="/contact-us" element={<ContactUs />} /> 
        
        </Routes>
        
        
        </>
    )
}