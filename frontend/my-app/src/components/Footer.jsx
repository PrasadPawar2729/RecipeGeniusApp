import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";

 import "../Styles/Footer.css";


import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div style={{ border: '2px solid black' ,display:"flex",flexDirection:"column",width:""}}>
        <Box className="footer" mb={6} >
          <Box className="footerContent" mb={6}>
            <Box className="footerSection">
             
              <Link to="/about-us">
                <Text fontWeight="bold" mb={3}>About Us</Text>
              </Link>

              <Link to="/contact-us">
                <Text fontWeight="bold" mb={3}>Contact Us</Text>
              </Link>

              <Text fontWeight="bold" mb={3}>Privacy Policy</Text>
            </Box>
            <Box className="footerSection">
              <Text fontWeight="bold" mb={3}>
                Recipes
              </Text>
              <Text fontWeight="bold" mb={3}>View All Recipes</Text>
              <Text fontWeight="bold" mb={3}>Submit a Recipe</Text>
              <Text fontWeight="bold" mb={3}>Categories</Text>
            </Box>
            <Box className="footerSection" >
              <Text fontWeight="bold" mb={4}>Follow Us</Text>
              <Flex alignItems="center" gap={3}>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <FaFacebookSquare className="icon" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitterSquare className="icon" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="icon" />
                </a>
              </Flex>
            </Box>
          </Box>
          <Flex justifyContent="center" borderTop="1px solid #fff" pt="30px">
            <Text fontWeight="bold">&copy; 2024 Cookbook</Text>
          </Flex>
        </Box>
      </div>
    </>
  );
};

export default Footer;
