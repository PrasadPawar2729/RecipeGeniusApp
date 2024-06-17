

import './App.css'
import { AllRouter } from './Routes/AllRouter'

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import AboutUs from './components/AboutUs.jsx';
import ContactUs from './components/ContactUs.jsx';


function App() {

  return (
    <>
      <AllRouter />
      <Routes>
        <Route path="/" element={<Footer />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );

}

export default App;
