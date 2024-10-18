import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'

function App() {
  return (
    <>
      <ChakraProvider>
        
        <Homepage/>
       
      </ChakraProvider>
    </>
  )
}

export default App
