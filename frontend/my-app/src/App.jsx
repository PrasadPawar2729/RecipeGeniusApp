import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Heading from './components/Heading.jsx';
import Footer from './components/Footer.jsx';
import AboutUs from './components/AboutUs.jsx';
import ContactUs from './components/ContactUs.jsx';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Heading />
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
