import React, { useEffect, useState } from 'react';
import { Box, Button, Heading, Image, ListItem, Spinner, Text, UnorderedList, useToast } from "@chakra-ui/react";
import axios from 'axios';
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

import "../styles/RecipDet.css";

import API from '../API/api';

const RecipeData = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorited, setFavorited] = useState(false);

  const { id } = useParams();
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}recipes/${id}`)
      .then(response => {
        setLoading(false);
        if (Array.isArray(response.data)) {
          setRecipes(response.data);
          console.log(response.data);
        } else {
          setRecipes([response.data]);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorited(favorites.includes(id));
  }, [id]);

  const toggleFavorite = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      if (favorited) {
        const updatedFavorites = favorites.filter(fav => fav !== id);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        toast({
          title: "Recipe removed from favorites!",
          status: "info",
          duration: 3000,
          isClosable: true,
        });
      } else {
        localStorage.setItem('favorites', JSON.stringify([...favorites, id]));
        toast({
          title: "Recipe added to favorites!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
      setFavorited(!favorited);
    } else {
      toast({
        title: "Please login first!",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Navbar />
      <Box position="fixed" top="180px" right="20px" zIndex="999">
        <Button onClick={toggleFavorite} variant="unstyled" display="flex" flexDirection="column" alignItems="center">
          {favorited ? (
            <>
              <Image
                height={50}
                width={50}
                src="https://cdn-icons-png.flaticon.com/128/2589/2589175.png"
                alt="Red Heart Icon"
              />
              <Text color='black'>Saved</Text>
            </>
          ) : (
            <>
              <Image
                height={50}
                width={50}
                src="https://cdn-icons-png.flaticon.com/128/151/151910.png"
                alt="Transparent Heart Icon"
              />
              <Text color='black'>Save</Text>
            </>
          )}
        </Button>
      </Box>

      <Box
        backgroundImage="url('https://images.pexels.com/photos/4397925/pexels-photo-4397925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
        backgroundSize="cover"
        backgroundPosition="center"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={4}
      >
        <Heading as="h1" fontFamily="sans-serif" textAlign="center" mb={5} color="teal" mt={5}>Recipe Details</Heading>

        {loading ? (
          <Box textAlign="center">
            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="teal.500" size="xl" />
          </Box>
        ) : (
          recipes.map(recipe => (
            <motion.div 
              key={recipe._id}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="recipe-container"
            >
              <Box
                p={5}
                className="recipe-box"
              >
                <Box width="40%" className="image-box">
                  <Image 
                    src={recipe.image || "https://images.pexels.com/photos/6287300/pexels-photo-6287300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                    alt={recipe.title}
                    maxH={400}
                    width={"100%"}
                    borderRadius="lg"
                    boxShadow="md"
                    mb={4}
                    className="image"
                  />
                </Box>
                <Box width="50%" boxShadow="lg" m={4} className="details-box">
                  <Box p={4}>
                    <Heading as="h2" size="lg" className="title">{recipe.title}</Heading>
                    <Text mt={2} fontWeight="bold" color="gray.600" className="description">{recipe.description}</Text>
                    <Box>
                      <Text mt={2} fontWeight="bold" color="gray.600" className="dietary ingredient-item">Dietary Restrictions: {recipe.dietaryRestrictions.join(', ')}</Text>
                      <Text mt={2} fontWeight="bold" color="gray.600" className="healthiness ingredient-item">Healthiness: {recipe.healthiness}</Text>
                      <Text mt={2} fontWeight="bold" color="gray.600" className="created-by ingredient-item">Created By: {recipe.createdBy}</Text>
                      <Text mt={2} fontWeight="bold" color="gray.600" className="created-at ingredient-item">Created At: {new Date(recipe.createdAt).toLocaleDateString()}</Text>
                      <Text mt={2} fontWeight="bold" color="gray.600" className="cook-time ingredient-item">Cook Time: {recipe.cookTime}</Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="instruction-ingredient-box">
                <Box width="40%" m={4} className="instruction-box">
                  <Box p={4} className="instruction-inner">
                    <Text fontWeight="bold" color="gray.600" mb={2} className="instruction-header">Instructions</Text>
                    <UnorderedList className="instruction-list">
                      {recipe.instruction?.map((instruction, index) => (
                        <ListItem 
                          key={index} 
                          color="gray.600" 
                          _hover={{ color: "teal", fontWeight: "bold" }} 
                          className="instruction-item"
                        >
                          {instruction}
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </Box>
                </Box>
                
                <Box width="40%" m={4} className="ingredient-box">
                  <Box p={4} className="ingredient-inner">
                    <Text fontWeight="bold" color="gray.600" mb={2} className="ingredient-header">Ingredients</Text>
                    <UnorderedList className="ingredient-list">
                      {recipe.ingredients?.map((ingredient, index) => (
                        <ListItem 
                          key={index} 
                          color="gray.600" 
                          _hover={{ color: "teal", fontWeight: "bold" }}
                          className="ingredient-item"
                        >
                          {ingredient}
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))
        )}
      </Box>
    </>
  );
}

export default RecipeData;
