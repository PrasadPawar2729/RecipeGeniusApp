import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import AboutUs from './components/AboutUs.jsx';
import ContactUs from './components/ContactUs.jsx';
import Banner from './components/Banner.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
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
