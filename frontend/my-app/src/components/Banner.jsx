import React, { useState, useEffect } from 'react';
import { Box, Image, Flex } from "@chakra-ui/react";

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10',
    "https://images.pexels.com/photos/5507638/pexels-photo-5507638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10",
    'https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10',
    "https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10",
    'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <Box className="banner" position='relative'>
      <Image
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        w='1200px'
        maxH='350px'
        objectFit='cover'
      />
      <Box
        position='absolute'
        top='30%'
        left='50%'
        transform='translate(-50%, -50%)'
        textAlign='center'
        color='white'
        fontSize='4.2vw'
        fontWeight='bold'
        textShadow='2px 2px 8px rgba(0, 0, 0, 0.5), 4px 4px 6px rgba(0, 0, 0, 0.3)'
        w='80%'
        h='10%'
      >
       Elevate Your Senses with Our Best Recipes!
      </Box>
      <Flex
        position='absolute'
        bottom='10px'
        left='50%'
        transform='translateX(-50%)'
        alignItems='center'
      >
        {images.map((image, index) => (
          <Box
            key={index}
            w='10px'
            h='10px'
            borderRadius='50%'
            backgroundColor={currentImageIndex === index ? 'teal' : 'lightgray'}
            margin='0 5px'
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Banner;
