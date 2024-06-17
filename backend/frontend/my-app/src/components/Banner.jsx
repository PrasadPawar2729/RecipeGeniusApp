import React, { useState, useEffect } from 'react';
import { Box, Image, Flex } from "@chakra-ui/react";

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/9738985/pexels-photo-9738985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    "https://images.pexels.com/photos/1152237/pexels-photo-1152237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3214161/pexels-photo-3214161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        w='100%'
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
        Find the best recipes in a few steps!
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
