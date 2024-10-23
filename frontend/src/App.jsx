import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import SkincareTips from './pages/SkincareTips'
import Homepage from './components/Homepage'
import DermatologistProfile from './pages/DermatologistProfile'
import Dermatologist from './components/Dermatologist'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import DermatologistSignupForm  from './pages/DermSignUp.jsx'


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
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/dermatologist' element={<Dermatologist />}/>
            <Route path='/dermatologistSignup' element={<DermatologistSignupForm />} />
          </Routes>
        </Router>  
      </ChakraProvider>
    </>
  )
}

export default App
