import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import SkincareTips from './pages/SkincareTips'

function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path='/skincareTips' element={<SkincareTips />}/>
          </Routes>
        </Router>  
      </ChakraProvider>
    </>
  )
}

export default App
