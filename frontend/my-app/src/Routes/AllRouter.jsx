import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Signup from "../pages/Signup/Signup"



export const AllRouter=()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
        </Routes>
        
        
        </>
    )
}