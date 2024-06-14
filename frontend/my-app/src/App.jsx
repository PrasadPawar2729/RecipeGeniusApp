
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Heading from './components/Heading.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <>
      <ChakraProvider>
        {/* <Navbar/> */}
        <Heading/> 
        <Footer/>
      </ ChakraProvider>
    </>
  )
}

export default App
