import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import SkincareTips from './pages/SkincareTips'
import Homepage from './components/Homepage'
import DermatologistProfile from './pages/DermatologistProfile'
import SignUp from './pages/SignUp'

function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path='/skincareTips' element={<SkincareTips />}/>
            <Route path='/' element={<Homepage />}/>
            <Route path='/dermatologistProfile' element={<DermatologistProfile />} />
            <Route path='/signUp' element={<SignUp />} />
          </Routes>
        </Router>  
      </ChakraProvider>
    </>
  )
}

export default App
