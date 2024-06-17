import { useLocation } from 'react-router-dom';
import {
  Box,
  Heading,
  Text,
  Link,
  Stack,
  Image,
  useColorModeValue,
  Flex
} from "@chakra-ui/react";

const SearchResults = () => {
  const location = useLocation();
  const { recipes } = location.state;

  return (
    <Box p={5} maxW="7xl" mx="auto">
      <Heading
        as="h1"
        size="2xl"
        mb={10}
        textAlign="center"
        color={useColorModeValue("teal.500", "teal.300")}
        textTransform="uppercase"
        letterSpacing="widest"
      >
        Search Results
      </Heading>
      {recipes.length > 0 ? (
        <Stack spacing={10}>
          {recipes.map((recipe) => (
            <Box
              key={recipe.id}
              p={5}
              shadow="lg"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              transition="all 0.3s ease-in-out"
              _hover={{ transform: "scale(1.02)", shadow: "2xl" }}
            >
              <Flex direction={{ base: "column", md: "row" }}>
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  borderRadius="md"
                  objectFit="cover"
                  boxSize={{ base: "100%", md: "250px" }}
                  mr={{ md: 5 }}
                  transition="all 0.3s ease-in-out"
                  _hover={{ opacity: 0.9 }}
                />
                <Box mt={{ base: 4, md: 0 }}>
                  <Heading as="h3" size="lg" mb={2}>
                    <Link
                      href={`/recipes/${recipe.id}`}
                      color={useColorModeValue("teal.600", "teal.400")}
                      textDecoration="none"
                      _hover={{ textDecoration: "underline" }}
                    >
                      {recipe.title}
                    </Link>
                  </Heading>
                  <Text mt={4} textAlign="justify" color={useColorModeValue("gray.700", "gray.300")}>
                    {recipe.description}
                  </Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </Stack>
      ) : (
        <Text textAlign="center" fontSize="xl" color={useColorModeValue("gray.600", "gray.400")}>
          No recipes found
        </Text>
      )}
    </Box>
  );
};

export default SearchResults;
