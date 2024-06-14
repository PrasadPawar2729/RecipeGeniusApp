// src/components/AboutUs.js
import { Box, Heading, Text, Image, VStack } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <Box p={5}>
      <VStack spacing={5}>
        <Heading as="h1" size="xl">About Us</Heading>
        <Image src="/path/to/your/image.jpg" alt="About Us Image" borderRadius="md" />
        <Text fontSize="lg">
        Welcome to MEALMKR, your ultimate culinary companion! Whether you&apos;re a seasoned chef or a kitchen novice,
        MEALMKR is here to inspire your next meal with a vast collection of diverse recipes from around the globe.
          From mouthwatering main courses to delightful desserts and everything in between,
           our app offers easy-to-follow recipes accompanied by step-by-step instructions and beautiful photos.
            Discover new flavors, create shopping lists, and even save your favorite recipes for quick access.
             With MealMKR, cooking delicious meals has never been easier or more enjoyable.
              Download now and embark on a flavorful journey!
        </Text>
      </VStack>
    </Box>
  );
};

export default AboutUs;
