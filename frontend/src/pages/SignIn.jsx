import React from "react";
import { Box,Heading,FormControl,FormLabel,Input,Button,Text,Image,Link as ChakraLink, } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import logo from "../assets/Pink_Minimal_Skincare___Hair_Free_Logo__1_-removebg-preview.png"

const SignIn = () => {
    return (
        <>
        <Box display='flex'>
            <Box width='50vw' height='100vh' ml='20rem'>
                <Image src={logo} alt='dermaconnect-logo' height='250px' ml='-5rem' mt='4rem'/>
                <Heading>SIGN IN</Heading>
                <form >
                    <FormControl mt='2rem'>
                        <FormLabel mb='-0.5rem'>Email</FormLabel>
                        <Input borderColor='#BAB5B5' width='21vw' mt='1rem'/>   
                    </FormControl>
                    <FormControl mt='1rem'>
                        <FormLabel mb='-0.5rem'>Password</FormLabel>
                        <Input borderColor='#BAB5B5' width='21vw' mt='1rem'/>   
                    </FormControl>
                    <Button type='submit' bgColor='#0A345C' colorScheme="#0A345C" color='#FFFFFF' mt='3rem' width='21vw'>Sign Up</Button>
                    <Text mt='2rem' ml='4em'>
                        Don't have an account?
                        <ChakraLink as={ReactRouterLink} to='/signUp' color='#00BFFF' ml='0.5rem'>
                            Sign Up 
                        </ChakraLink>
                    </Text>
                </form>
            </Box>
            <Box bgColor='#D1EEF4' width='50vw' p='5rem'>
                <Heading mt='17rem'>Welcome Back!</Heading>  
                <Text fontSize='2xl' mt='1rem'>Stay connected with us—please log in with your personal details.</Text> 
            </Box>
        </Box>
        </>
    )
}
export default SignIn;