import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  useMediaQuery,
  Avatar,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  useColorMode
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../API/api";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWideEnough] = useMediaQuery("(min-width: 766px)");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const toast = useToast();
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchQuery, setSearchQuery] = useState('');
  


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${API}recipes/search`, {
        params: { title: searchQuery }
      });
      // Pass search results to the search results page or handle as necessary
      navigate('/search-results', { state: { recipes: response.data } });
    } catch (error) {
      console.error('Search failed:', error);
    }
  };
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails")) || {};
    if (userDetails) {
      const token = localStorage.getItem("token");
      axios
        .get(`${API}user`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log("API response:", response.data);
          setUserData(response.data);
          console.log(response.data.email);
          console.log(response.data);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.error("Error:", error.message);
          setIsLoggedIn(false);
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserData(null);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  const toggle = () => setIsOpen(!isOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSignUpClick = () => {
    navigate("/login-signup");
  };

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        mb={2}
        position="sticky"
        top={0}
        zIndex={999}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon boxSize={7} />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={toggle}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box as="a" href="/">
              <Logo />
            </Box>
          
             <Box>
        <form onSubmit={handleSearchSubmit}>
        <Flex>
        <Input 
            type="text" 
            placeholder="Search recipes..." 
            placeholderTextColor="gray.400" 
            bg="white" 
            color="gray.700" 
            _placeholder={{ color: "gray.400" }}
            value={searchQuery} 
            onChange={handleSearchChange} 
          />
          <Button type="submit" ml={2}>Search</Button>
        </Flex>
        </form>
      </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Box
                as="a"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "#319795",
                  color: "white",
                }}
                href={"#"}
                color="#319795"
                fontWeight="bold"
                fontSize="md"
                onClick={() => navigate("/")}
              >
                HOME
              </Box>
              <Box
                as="a"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "#319795",
                  color: "white",
                }}
                href={"#"}
                color="#319795"
                fontWeight="bold"
                fontSize="md"
                onClick={() => navigate("/about")}
              >
                ABOUT
              </Box>
              <Box
                as="a"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "#319795",
                  color: "white",
                }}
                href={"#"}
                color="#319795"
                fontWeight="bold"
                fontSize="md"
                onClick={() => navigate("/contact-us")}
              >
                CONTACT-US
              </Box>
            </HStack>
          </HStack>
          <Link to="/favorites">
              <Button
                fontWeight="bold"
                  color="#319795"
                _hover={{
                  textDecoration: "none",
                  bg: "teal.500",
                  color: "white",
                }}
              >
                Favorites
              </Button>
            </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Flex alignItems={"center"}>
            {isWideEnough ? (
              isLoggedIn ? (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar name={userData?.username} src={userData?.Image} />
                  </MenuButton>
                  <MenuList>
                    <MenuItem fontWeight={"bold"} onClick={openModal}>
                      Account
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={handleLogout} fontWeight={"bold"}>
                      Logout
                    </MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <Button
                  fontWeight={"bold"}
                  onClick={handleSignUpClick}
                  _hover={{
                    textDecoration: "none",
                    bg: "#319795",
                    color: "white",
                  }}
                >
                  Login/Sign-Up
                </Button>
              )
            ) : (
              <></>
            )}
          </Flex>
        </Flex>
      </Box>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <Box
              as="a"
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: "#319795",
                color: "white",
              }}
              href={"#"}
              color="#319795"
              fontWeight="bold"
              fontSize="md"
              onClick={() => navigate("/")}
            >
              HOME
            </Box>
            <Box
              as="a"
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: "#319795",
                color: "white",
              }}
              href={"#"}
              color="#319795"
              fontWeight="bold"
              fontSize="md"
              onClick={() => navigate("/about")}
            >
              About
            </Box>
            <Box
              as="a"
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: "#319795",
                color: "white",
              }}
              href={"#"}
              color="#319795"
              fontWeight="bold"
              fontSize="md"
              onClick={() => navigate("/contact-us")}
            >
              Contact-us
            </Box>
          </Stack>
        </Box>
      ) : null}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Account Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Username: {userData?.username || "john"}</Text>
            <Text>Email: {userData?.email || "john@gmail.com"}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Navbar;
