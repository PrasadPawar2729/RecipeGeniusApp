// src/components/ContactUs.js
import { Box, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const ContactUs = () => {
  return (
    <Box p={5}>
      <VStack spacing={5}>
        <Heading as="h1" size="xl">Contact Us</Heading>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea />
        </FormControl>
        <Button colorScheme="teal" type="submit">Submit</Button>
      </VStack>
    </Box>
  );
};

export default ContactUs;
