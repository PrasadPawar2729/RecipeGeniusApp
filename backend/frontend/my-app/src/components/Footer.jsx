import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <Box className="footer">
      <Box className="footerContent" mb={6}>
        <Box className="footerSection">
          <Text fontWeight="bold" mb={3}>About Us</Text>
          <Text mb={3}>About our website</Text>
          <Text mb={3}>Contact Us</Text>
          <Text mb={3}>Privacy Policy</Text>
        </Box>
        <Box className="footerSection">
          <Text fontWeight="bold" mb={3}>
            Recipes
          </Text>
          <Text mb={3}>View All Recipes</Text>
          <Text mb={3}>Submit a Recipe</Text>
          <Text mb={3}>Categories</Text>
        </Box>
        <Box className="footerSection">
          <Text fontWeight="bold" mb={4}>Follow Us</Text>
          <Flex id="iconsx" alignItems="center" gap={3} marginLeft="80px">
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
        <Text>&copy; 2024 MEALMKR</Text>
      </Flex>
    </Box>
  );
};

export default Footer;