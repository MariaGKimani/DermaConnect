import React from 'react'
import './App.css'
import Test from './pages/Test'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
      <ChakraProvider>
        <Test />
      </ChakraProvider>
    </>
  )
}

export default App
