import React from "react";
import { Image,Box,Flex,Heading,Text,FormControl,FormLabel,Input,Button } from "@chakra-ui/react";
import { PhoneIcon,EmailIcon } from "@chakra-ui/icons";
import { FaTwitter,FaInstagram,FaFacebook } from "react-icons/fa";
import logo from "../assets/Pink_Minimal_Skincare___Hair_Free_Logo__1_-removebg-preview.png"

const Footer = () => {
    return (
        <>
           <Box display='flex' justifyContent='space-between' bgColor='#D1EEF4'>
                <Box ml='10rem'>
                    <Image src={logo} alt="DermaConnect logo" height='150px'/>
                    <Heading color='#0A345C' >Let's Talk</Heading>
                    <Text mt='0.5rem'>Ask us anything or just say hi</Text>

                    <Flex mt='2.5rem'>
                        <PhoneIcon color='#00BFFF' fontSize='1.2rem'/>
                        <Text ml='1rem'>+254767654321</Text>
                    </Flex>
                    <Flex mt='1rem'>
                        <EmailIcon color='#00BFFF' fontSize='1.3rem'/>
                        <Text ml='1rem'>dermaconnect@gmail.com</Text>
                    </Flex>

                    <Flex mt='2.5rem' gap='4.7rem'>
                        <FaTwitter color='#00BFFF' fontSize='1.5rem'/>
                        <FaInstagram color='#00BFFF' fontSize='1.5rem'/>
                        <FaFacebook color='#00BFFF' fontSize='1.5rem'/>
                    </Flex>
                </Box>

                <Box mr='10rem' mt='3rem'>
                    <Flex gap='3.5rem'>
                        <Text as='b'>About</Text>
                        <Text as='b'>Find Dermatologist</Text>
                        <Text as='b'>Education</Text>
                    </Flex>

                    <form >
                        <FormControl mt='4rem'>
                            <FormLabel mb='-0.5rem'>Name</FormLabel>
                            <Input variant='flushed' borderColor='#000000' focusBorderColor="#000000" width='15.5vw' />
                        </FormControl>
                        <FormControl mt='1rem'>
                            <FormLabel mb='-0.5rem'>Email</FormLabel>
                            <Input variant='flushed' borderColor='#000000' focusBorderColor="#000000" width='15.5vw'/>   
                        </FormControl>
                        <FormControl mt='1rem'>
                            <FormLabel mb='-0.5rem'>Message</FormLabel>
                            <Input variant='flushed' borderColor='#000000' focusBorderColor="#000000"/>   
                        </FormControl>

                        <Button type='submit' bgColor='#0A345C' colorScheme="#0A345C" color='#FFFFFF' mt='1.5rem' width='10vw'>Send</Button>
                    </form>

                    <Text mt='4rem' mb='2rem'>&copy;Copyright{new Date().getFullYear()}. All rights reserved, DermaConnect</Text>
                </Box>
            </Box> 
        </>
    )
}
export default Footer;