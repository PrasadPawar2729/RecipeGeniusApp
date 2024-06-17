import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BiBookOpen } from "react-icons/bi";

const Heading = () => {
  return (
    <div>
      <Flex align="center" justify="center" bg="teal.500" p={8} mb="3" >
        <Text fontSize="3xl" fontFamily="fantasy" color="white">
         MealMkr
        </Text>
        <Box ml={2}>
          <BiBookOpen size={35} color="white" />
        </Box>
      </Flex>
    </div>
  );
};

export default Heading;