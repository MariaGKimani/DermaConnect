import React from "react";
import { Box,Heading,FormControl,FormLabel,Input,Button,Text,Image } from "@chakra-ui/react";
import logo from "../assets/Pink_Minimal_Skincare___Hair_Free_Logo__1_-removebg-preview.png"

const SignUp = () => {
    return (
        <>
        <Box display='flex'>
            <Box width='50vw' height='100vh' ml='20rem'>
                <Image src={logo} alt='dermaconnect-logo' height='250px' ml='-5rem'/>
                <Heading>CREATE AN ACCOUNT</Heading>
                <form >
                    <FormControl mt='2rem'>
                        <FormLabel mb='-0.5rem'>Name</FormLabel>
                        <Input borderColor='#BAB5B5' width='21vw' mt='1rem' />
                    </FormControl>
                    <FormControl mt='1rem'>
                        <FormLabel mb='-0.5rem'>Phone Number</FormLabel>
                        <Input borderColor='#BAB5B5' width='21vw' mt='1rem'/>   
                    </FormControl>
                    <FormControl mt='1rem'>
                        <FormLabel mb='-0.5rem'>Email</FormLabel>
                        <Input borderColor='#BAB5B5' width='21vw' mt='1rem'/>   
                    </FormControl>
                    <FormControl mt='1rem'>
                        <FormLabel mb='-0.5rem'>Password</FormLabel>
                        <Input borderColor='#BAB5B5' width='21vw' mt='1rem'/>   
                    </FormControl>
                    <Button type='submit' bgColor='#0A345C' colorScheme="#0A345C" color='#FFFFFF' mt='3rem' width='21vw'>Sign Up</Button>
                </form>
            </Box>
            <Box bgColor='#D1EEF4' width='50vw' p='5rem'>
                <Heading mt='17rem'>Hello,</Heading>  
                <Text fontSize='2xl' mt='1rem'>Join us on your journey to healthier skin. Enter your details to get started.</Text> 
            </Box>
        </Box>
        </>
    )
}
export default SignUp;