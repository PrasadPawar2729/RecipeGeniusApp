
import { Box, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const ContactUs = () => {
  return (
   <>
   <Navbar/>
    <Box p={5} display="flex" justifyContent="center" width="100%">
    <Box
     backgroundImage="https://www.shutterstock.com/image-photo/abstract-blurred-food-restaurant-600nw-697424737.jpg" bgPosition="center" bgSize="cover"   
    
     borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      maxWidth="500px"
      width="100%"
      p={8}
      backgroundColor="white"
    >
      <VStack spacing={5}      >
        <Heading as="h1" size="xl" textAlign="center">Contact Us</Heading>
        <FormControl id="name">
          <FormLabel color="black" fontWeight="800" fontSize="larger">Name</FormLabel>
          <Input type="text" placeholder='enter your name'
          bg="white"
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel color="black" fontWeight="800" fontSize="larger">Email</FormLabel>
          <Input type="email" placeholder='enter your email'
          bg="white" />
        </FormControl>
        <FormControl id="message">
          <FormLabel color="black" fontWeight="800" fontSize="larger">Message</FormLabel>
          <Textarea placeholder='enter your message...'
          bg="white"/>
        </FormControl>
        <Button colorScheme="teal" type="submit" width="full">Submit</Button>
      </VStack>
    </Box>
   
  </Box>
   <Footer />
   </>
  );
};

export default ContactUs;