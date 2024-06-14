
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import logo from "../Images/CraveIt (1).png"
const Heading = () => {
  return (
    <div>
      <Flex align="center" justify="center" bg="teal.500" p={4} mb="2">
        <Box boxSize="100px" >
          <Image src={logo} alt="#" />
        </Box>

        <Box></Box>

        <Box>
          <Button colorScheme='teal' variant='solid'>
            Button
          </Button>
        </Box>

        <Box>
          <Button colorScheme='teal' variant='outline'>
            Button
          </Button>
        </Box>


      </Flex>
    </div>
  );
};

export default Heading;
