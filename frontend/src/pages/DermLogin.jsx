import React from "react";
import { 
  Box, Button, FormControl, FormLabel, Heading, Image, Input, Text, Link as ChakraLink, Checkbox, Flex 
} from "@chakra-ui/react";
import { Link} from "react-router-dom";
import logo from "../assets/Pink_Minimal_Skincare___Hair_Free_Logo__1_-removebg-preview.png";

const DermLogin = () => {
  return (
    <>
      <Box display={"flex"}>
        <Box width='50vw' height='100vh' ml='20rem'>
          <Link to={'/'}>
          <Image src={logo} alt='dermaconnect-logo' height='250px' ml='-5.9rem' mt='1rem' />
          </Link>
          <Heading ml='-0.2rem' mt='-5rem'>SIGN IN</Heading>
          
          <form>
            <FormControl>
              <FormLabel color={'#181818'} mt={'2.5rem'}> Email</FormLabel>
              <Input type="email" placeholder="derma@gmail.com" borderColor='#0A345C' width='21vw' mt='0.5rem' />
            </FormControl>
            <FormControl>
              <FormLabel color={'#181818'} mt={'1.5rem'}> Password</FormLabel>
              <Input type="password" placeholder="Enter your password" borderColor='#0A345C' width='21vw' mt='0.5rem' />
            </FormControl>

            <Flex justifyContent="space-between" mt="1rem" width="21vw">
              <Checkbox colorScheme="blue" color='#181818'>Remember me</Checkbox>
              <ChakraLink color="#0A345C" href="#" fontWeight="bold" fontSize="sm">Forgot Password?</ChakraLink>
            </Flex>

            <Button type="submit" bgColor={'#0A345C'}  _hover={{bg: 'transparent',color: '#0A345C', border: '2px solid #0A345C',}} color='#FFFFFF' mt={'3rem'} width='21vw'>Sign in</Button>
          </form>

          <Flex justifyContent="center" mt="1rem">
            <Text fontSize="sm" color={'#181818'} ml="-17rem">
              Don’t have an account? 
              <Link to='/dermatologistSignup' fontWeight="bold" ml="0.5rem">
                Sign Up
              </Link>
            </Text>
          </Flex>
        </Box>

        <Box bgColor='#D1EEF4' width='50vw' p='5rem'>
          <Heading mt='10rem'>Welcome Back!</Heading>
          <Text fontSize='2xl' mt='2rem'>
            Log in to manage your profile and connect with patients seeking expert dermatology care.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default DermLogin;
