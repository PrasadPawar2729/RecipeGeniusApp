
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BiBookOpen } from "react-icons/bi";
import logo from "../../src/Image/CraveIt (1).png"

const Heading = () => {
  return (
    <div>
      <Flex align="center" justify="center">
        <Box boxSize='100px'>
          <Image src={logo} alt='Dan Abramov' />
        </Box>
      </Flex>
    </div>
  );
};

export default Heading;
