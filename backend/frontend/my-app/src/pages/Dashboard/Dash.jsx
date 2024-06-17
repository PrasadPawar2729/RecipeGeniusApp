import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
  useDisclosure,
  } from "@chakra-ui/react";
  import Axios from "axios";
  import React, { useEffect } from "react";
  import { useState } from "react";
  import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  } from "@chakra-ui/react";
  import Nav from "../../components/AdminNav";
  import EditRecipieModal from "../../components/EditRecipe";
  import { SearchIcon } from "@chakra-ui/icons";
  // import { useDebounce } from "../../utils/debounceHook";
  import axios from "axios";
  import API from "../../API/api";
  
  const Dashboard = () => {
  // const debouncedSearch = useDebounce(handleSearch, 1000);
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [modalItem, setModalItem] = useState(1);
  const [offset, setOffset] = useState((page - 1) * limit);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const getData = async () => {
  console.log(API);
  try {
  const res = await Axios.get(API + "recipes");
  setData(res.data);
  setFiltered(res.data);
  } catch (error) {
  console.log(error);
  }
  };
  
  function handleSearch(e) {
  const keyword = e.target.value;
  const name = e.target.name;
  if (keyword) {
  setFiltered(() => {
  return data.filter((item) => {
  if (name == "filter") {
  return item.category == keyword;
  }
  let values = Object.values(item);
  return values.some((value) => {
  let cur = typeof value == "string" ? value.toLowerCase() : value;
  return cur.includes(keyword.toLowerCase());
  });
  });
  });
  } else {
  setFiltered(data);
  }
  }
  
  const handleDelete = async (id) => {
  const address = `${API}recipes/${id}`;
  const token = localStorage.getItem("token");
  try {
  await axios.delete(address, {
  headers: {
  Authorization:` Bearer ${token}`,
  },
  });
  await getData();
  } catch (error) {
  console.log(error);
  }
  };
  
  useEffect(() => {
  getData();
  }, []);
  
  useEffect(() => {
  setOffset((page - 1) * limit);
  }, [page, limit]);
  
  useEffect(() => {
  console.log(filtered);
  }, [page, limit, data, filtered]);
  
  return (
  <>
  <Nav />
  <Box px={[2, 2, 4, 8]}>
  {isOpen && (
  <EditRecipieModal
  isOpen={isOpen}
  onOpen={onOpen}
  onClose={onClose}
  item={filtered.find((item) => item._id == modalItem)}
  getData={getData}
  />
  )}
  <HStack mt={5}>
  <NumberInput
  size="md"
  maxW={20}
  defaultValue={limit}
  min={5}
  max={20}
  onChange={(value) => {
  setLimit(+value);
  }}
  >
  <NumberInputField />
  <NumberInputStepper>
  <NumberIncrementStepper />
  <NumberDecrementStepper />
  </NumberInputStepper>
  </NumberInput>
  </HStack>
  <Box>
  <TableContainer whiteSpace={"wrap"}>
  <Table variant="simple" size="sm">
  <TableCaption placement="top" fontSize="2rem">Recipie Table</TableCaption>
  <Thead>
  <Tr>
  <Th>S.no</Th>
  <Th>Title</Th>
  <Th>Description</Th>
  <Th>Category</Th>
  <Th>Edit</Th>
  <Th>Delete</Th>
  </Tr>
  </Thead>
  <Tbody>
  {Array.isArray(filtered) &&
  filtered
  .map((item, idx) => {
  return (
  <Tr key={idx}>
  <Td>{offset + idx + 1}</Td>
  <Td>{item.title}</Td>
  <Td>
  <Text noOfLines={3}>{item.description}</Text>
  </Td>
  <Td>{item.category}</Td>
  <Td>
  <Button
  onClick={() => {
  onOpen();
  setModalItem(item._id);
  }}
  >
  Edit
  </Button>
  </Td>
  <Td>
  <Button
  colorScheme="red"
  onClick={() => {
  handleDelete(item._id);
  }}
  >
  Delete
  </Button>
  </Td>
  </Tr>
  );
  })
  .slice(offset, offset + limit)}
  </Tbody>
  </Table>
  </TableContainer>
  <HStack gap={2} justifyContent="center" mt={5}>
  <Button
  isDisabled={page == 1}
  onClick={() => setPage((prev) => prev - 1)}
  >
  Prev
  </Button>
  <Button isDisabled={true}>
  Page {page} of {Math.floor(filtered.length / limit)}
  </Button>
  <Button
  isDisabled={page == Math.floor(filtered.length / limit)}
  onClick={() => setPage((prev) => prev + 1)}
  >
  Next
  </Button>
  </HStack>
  </Box>
  </Box>
  </>
  );
  };
  
  export default Dashboard;