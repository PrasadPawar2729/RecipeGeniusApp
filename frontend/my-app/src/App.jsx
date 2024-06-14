
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Heading from './components/Heading.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <ChakraProvider>
        < Heading />
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default App
