import React, { useEffect, useState } from 'react';
import { Box, Heading, List, ListItem, Spinner, Text, Image } from "@chakra-ui/react";
import axios from 'axios';
import Navbar from "../../components/Navbar";
import API from '../../API/api';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      const favoriteIds = JSON.parse(localStorage.getItem('favorites') || '[]');
      if (favoriteIds.length === 0) {
        setLoading(false);
        return;
      }

      try {
        const favoritePromises = favoriteIds.map(id => axios.get(`${API}recipes/${id}`));
        const favoriteResponses = await Promise.all(favoritePromises);
        const nestedFavoriteRecipes = favoriteResponses.map(response => response.data);
        const favoriteRecipes = nestedFavoriteRecipes.flat();
        console.log('favoriteRecipes:', favoriteRecipes); // Debugging line
        setFavorites(favoriteRecipes);
      } catch (error) {
        console.error('Error fetching favorite recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <>
      <Navbar />
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
        <Heading as="h1" fontFamily="sans-serif" textAlign="center" mb={5} color="teal" mt={5}>Favorite Recipes</Heading>

        {loading ? (
          <Box textAlign="center">
            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="teal.500" size="xl" />
          </Box>
        ) : (
          <List spacing={3} width="100%" maxWidth="600px" mx="auto">
            {favorites.length === 0 ? (
              <Text textAlign="center" fontSize="lg" color="gray.500">No favorite recipes found.</Text>
            ) : (
              favorites.map((recipe) => (
                <ListItem key={recipe._id} p={4} border="1px" borderColor="gray.200" borderRadius="md" boxShadow="md" _hover={{ bg: "teal.50" }}>
                  {Object.entries(recipe).map(([key, value]) => (
                    <Box key={key} mb={2}>
                      <Text fontWeight="bold" color="black">{key}:</Text>
                      {key === 'image' ? (
                        <Image src={value} alt={recipe.title} borderRadius="md" />
                      ) : Array.isArray(value) ? (
                        <Text color="black">{value.join(', ')}</Text>
                      ) : (
                        <Text color="black">{value}</Text>
                      )}
                    </Box>
                  ))}
                </ListItem>
              ))
            )}
          </List>
        )}
      </Box>
    </>
  );
};

export default Favorites;
