

import './App.css'
import { AllRouter } from './Routes/AllRouter'
// import { ChakraProvider } from '@chakra-ui/react'
// import Heading from './components/Heading.jsx'
// import Footer from './components/Footer.jsx'

import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import AboutUs from './components/AboutUs.jsx';
import ContactUs from './components/ContactUs.jsx';
import Banner from './components/Banner.jsx';


function App() {

  return (
    <>
     <AllRouter/>
     
    </>
  )

    <ChakraProvider>
      <Router>
        <Banner/>
        <Routes>
          <Route path="/" element={<Footer />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );

}

export default App;
