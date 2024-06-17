import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Grid, Box, Button, Image, Spinner, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import API from '../API/api';



const Container = ({filter}) => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);
  const [loading, setLoading] = useState(false);
  


  const navigate = useNavigate();
  const sentinelRef = useRef(null);
  

  function handleSearch() {
    const keyword = filter;
    if (keyword) {
      setFiltered(() => {
        return data.filter((item) => {
            if(keyword == "Vegetarian" ||keyword == "Non-Vegetarian"){
                return item.category==keyword
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

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      try {
        const response = await axios.get(`${API}recipes/?page=${currentPage}&limit=${itemsPerPage}`);
        setData((prevData) => [...prevData, ...response.data]);
        setFiltered((prevData) => [...prevData, ...response.data]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }, options);

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [loading]);

  const handleDetailClick = (id) => {
     navigate(`/recipe-data/${id}`);
    console.log(id)
  };

  useEffect(()=>{
    handleSearch();
  },[filter])



  return (
    
    <Flex justifyContent="flex-start" width="100%">
      <Flex flexDirection="column" width={{ base: '100%', md: '90%', lg: '80%' }}>
        <Box p={5}>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={8}  >
            {filtered.map((item, index) => (
              <Box key={index} borderWidth="1px"    borderRadius="lg" overflow="hidden" width="350px" marginRight={"40px"} boxShadow="md"
             
              >
                <Image src={item.image} width="350px" height={"300px"} alt={item.title} />
                <Box p="6" padding="10" >
                  <Box d="flex" alignItems="baseline">
                    <Box fontWeight="semibold" fontSize="lg" mr={2}>
                      {item.title}
                    </Box>
                    <Box color="gray.500" fontWeight="semibold" fontSize="sm">
                      Cook Time: {item.cookTime}
                    </Box>
                  </Box>
                  <Button onClick={() => handleDetailClick(item._id)} mt={2} colorScheme="yellow">
                    Details
                  </Button>
                </Box>
              </Box>
            ))}
            <div ref={sentinelRef} style={{ visibility: 'hidden', height: 1 }}></div>
          </Grid>
          {loading && (
            <Flex justifyContent="center" alignItems="center" marginTop="20px"> 
              <Spinner color="teal" size="xl" thickness="4px" />
            </Flex>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Container;
