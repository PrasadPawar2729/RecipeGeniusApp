import { Box, Heading, Text, Image, VStack } from '@chakra-ui/react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import logomp4 from "../../Image/vid.mp4"
import QuiltedImageList from '../../components/Imagelist';
// import logomp4 from "../Images/CraveIt (1) copy.mp4"

const AboutUs = () => {
  return (
    <>
     <Navbar/>
    <Box p={5}>
     
      <Heading as="h1" size="xl" mb={6}>About Us</Heading>
      <div style={{ display: "flex", justifyContent: "space-around" }} spacing={5}>
        {/* <Image style={{width:"450px"}} src={logo} alt="About Us Image" borderRadius="md" /> */}

        <video  style={{width:"450px"}} src={logomp4} autoPlay loop ></video>
        
        <Box>
          <QuiltedImageList />
        </Box>
      </div>
      <Text style={{fontSize:"26px",fontWeight:"600",margin:"100px"}} >
        Welcome to MEALMKR, your ultimate culinary companion! Whether you&apos;re a seasoned chef or a kitchen novice,
        MEALMKR is here to inspire your next meal with a vast collection of diverse recipes from around the globe.
        From mouthwatering main courses to delightful desserts and everything in between,
        our app offers easy-to-follow recipes accompanied by step-by-step instructions and beautiful photos.
        Discover new flavors, create shopping lists, and even save your favorite recipes for quick access.
        With MealMKR, cooking delicious meals has never been easier or more enjoyable.
        Download now and embark on a flavorful journey!
      </Text>
      <Footer />
    </Box>
    </>
    
  );
};

export default AboutUs;