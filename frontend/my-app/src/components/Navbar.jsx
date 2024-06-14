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
  Image,
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
  Center,
  useColorMode
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import url from "./vars";

const Navbar = ({ filter, setFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWideEnough] = useMediaQuery("(min-width: 766px)");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState([]);
  const toast = useToast();
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails")) || {};
    if (userDetails) {
      const token = localStorage.getItem("token");
      axios
        .get(`${url}/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setUserData(response.data);
          localStorage.setItem("userInfo", JSON.stringify(response.data) || []);
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
    setUserData("");
    localStorage.removeItem("userInfo");
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
            <Flex>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.300" />}
                />
                <Input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Search..." />
              </InputGroup>
              <Box margin={2}>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      cursor="pointer"
                    >
                      <path
                        fill="#F58332"
                        d="M9 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2zM6.17 5a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 0 1 0-2h1.17zM15 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2h7.17zM9 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2h1.17z"
                      />
                    </svg>
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => setFilter("Vegetarian")} fontWeight={"bold"}>Veg</MenuItem>
                    <MenuItem onClick={() => setFilter("Non-Vegetarian")} fontWeight={"bold"}>Non-Veg</MenuItem>
                    <MenuDivider />
                    <MenuItem fontWeight={"bold"} onClick={() => setFilter("")}>Veg & Non-Veg</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Flex>
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
                onClick={() => navigate("/my-recipetin")}
              >
                MY RECIPETIN
              </Box>
            </HStack>
          </HStack>
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
                    <Avatar name={userData.username} src={userData.Image} />
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
                <Flex>
                  <Link to="/login-signup">
                    <Button variant={"solid"} colorScheme={"teal"} mr={4}>
                      LogIn
                    </Button>
                  </Link>
                  <Link to="/login-signup">
                    <Button variant={"solid"} colorScheme={"teal"} mr={4}>
                      SignUp
                    </Button>
                  </Link>
                </Flex>
              )
            ) : (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar name={userData.username} src={userData.Image} />
                </MenuButton>
                <MenuList>
                  {isLoggedIn ? (
                    <>
                      <MenuItem fontWeight={"bold"} onClick={openModal}>
                        Account
                      </MenuItem>
                      <MenuDivider />
                      <MenuItem fontWeight={"bold"} onClick={handleLogout}>
                        Logout
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      <MenuItem fontWeight={"bold"} onClick={handleSignUpClick}>
                        Sign Up
                      </MenuItem>
                      <MenuDivider />
                      <MenuItem fontWeight={"bold"} onClick={handleSignUpClick}>
                        LogIn
                      </MenuItem>
                    </>
                  )}
                </MenuList>
              </Menu>
            )}
          </Flex>
        </Flex>

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
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"/"}
                fontWeight={"bold"}
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
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                onClick={() => navigate("/my-recipetin")}
                fontWeight={"bold"}
              >
                MY RECIPETIN
              </Box>
              {!isLoggedIn && (
                <>
                  <Box
                    as="a"
                    px={2}
                    py={1}
                    rounded={"md"}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("gray.200", "gray.700"),
                    }}
                    href={"/login-signup"}
                    fontWeight={"bold"}
                  >
                    LogIn
                  </Box>
                  <Box
                    as="a"
                    px={2}
                    py={1}
                    rounded={"md"}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("gray.200", "gray.700"),
                    }}
                    href={"/login-signup"}
                    fontWeight={"bold"}
                  >
                    SignUp
                  </Box>
                </>
              )}
            </Stack>
          </Box>
        ) : null}

        <Modal isOpen={isModalOpen} onClose={closeModal} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Text textAlign="center" fontWeight="bold" fontSize="xl">
                ACCOUNT
              </Text>
              <Flex mt={4}>
                <Avatar name={userData.username} src={userData.Image} mr={3} />
                <Text>{userData.username}</Text>
              </Flex>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={4}>
                <Text
                  fontSize="lg"
                  _hover={{
                    color: useColorModeValue("teal.500", "teal.300"),
                    fontWeight: "bold",
                  }}
                >
                  Username: {userData.username}
                </Text>
                <Text
                  fontSize="lg"
                  _hover={{
                    color: useColorModeValue("teal.500", "teal.300"),
                    fontWeight: "bold",
                  }}
                >
                  Email: {userData.email}
                </Text>
                <Text
                  fontSize="lg"
                  _hover={{
                    color: useColorModeValue("teal.500", "teal.300"),
                    fontWeight: "bold",
                  }}
                >
                  Phone: 7632138889
                </Text>
                <Text
                  fontSize="lg"
                  _hover={{
                    color: useColorModeValue("teal.500", "teal.300"),
                    fontWeight: "bold",
                  }}
                >
                  Gender: Male
                </Text>
                <Text
                  fontSize="lg"
                  _hover={{
                    color: useColorModeValue("teal.500", "teal.300"),
                    fontWeight: "bold",
                  }}
                >
                  Role: {userData.role}
                </Text>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Text textAlign={"center"} color={"grey"}>
                @Wellcome to CookBook
              </Text>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default Navbar;
