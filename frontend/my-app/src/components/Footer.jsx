import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css"
import logo from "../Images/CraveIt (1) copy.png"

import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div id="Recpie-Footer">
        <Box className="footer" mb={6}  >
          <Box className="footerContent" mb={6}>
            <Box className="footerSection" >
              <Text fontWeight="bold" mt={7} mb={3} style={{ color: "Black", fontSize: "16px" }}>
                MEALMKR
              </Text>

              <Link to="/about-us">
                <Text fontWeight="bold" mt={7} mb={3} style={{ color: "Black", fontSize: "16px" }}>About Us</Text>
              </Link>

              <Link to="/contact-us">
                <Text fontWeight="bold" mb={3} style={{ color: "Black", fontSize: "16px" }}>Contact Us</Text>
              </Link>

              <Text fontWeight="bold" mb={3} style={{ color: "Black", fontSize: "16px" }}>Privacy Policy</Text>

              <Text fontWeight="bold" mb={3} style={{ color: "Black", fontSize: "16px" }}>
                Recipes
              </Text>

              <Text fontWeight="bold" mb={3} style={{ color: "Black", fontSize: "16px" }}>View All Recipes</Text>

              <Text fontWeight="bold" mb={3} style={{ color: "Black", fontSize: "16px" }}>Submit a Recipe</Text>

              <Text fontWeight="bold" mb={3} style={{ color: "Black", fontSize: "16px" }}>Categories</Text>

            </Box>
          </Box>
        </Box>



        <div style={{ width: "200px" }}>
          <img src={logo} alt="" />
        </div>

        <div >
          <Box className="footerSection" >
            <Text fontWeight="bold" mb={4}>Follow Us</Text>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className="icon" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitterSquare className="icon" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" />
              </a>
            </div>
          </Box>

          <Box className="footerSection">
            <p style={{ fontSize: "16px", marginTop: "10px" }}>&copy; 2024 MEALMKR</p>
          </Box>
        </div>

        
        <Box className="footer" mb={6}  >
          <Box className="footerContent" mb={6}>
            <Box className="footerSection" >
              <Text fontWeight="bold" mt={7} mb={3} style={{ color: "Black", fontSize: "16px" }}>
              FOOD & RECIPES

              </Text>

              <Link to="/about-us">
                <Text fontWeight="bold" mt={7} mb={3} style={{ color: "Black", fontSize: "16px" }}>Instant Searches</Text>
              </Link>

              <Link to="/contact-us">
                <Text fontWeight="bold" mb={3} style={{ color: "Black", fontSize: "16px" }}>Instant Pot Recipes</Text>
              </Link>

              <Text fontWeight="bold" mb={3} style={{ color: "Black", fontSize: "16px" }}>Pasta Recipes</Text>

              <Text fontWeight="bold" mb={3} style={{ color: "Black", fontSize: "16px" }}>
              Vegan Recipes
              </Text>

              <Text fontWeight="bold" mb={3} style={{ color: "Black", fontSize: "16px" }}>Taco Recipes</Text>

              <Text fontWeight="bold" mb={3} style={{ color: "Black", fontSize: "16px" }}>Soup Recipes</Text>

              <Text fontWeight="bold" mb={3} style={{ color: "Black", fontSize: "16px" }}>Meal Prep Recipes</Text>

            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Footer;


