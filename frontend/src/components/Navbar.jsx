import React from 'react';
import { Box, Spacer,Image, Flex, Button, IconButton, Icon } from '@chakra-ui/react';
import logo from "../assets/Pink_Minimal_Skincare___Hair_Free_Logo__1_-removebg-preview.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return(
        <>
            <Box display="flex" justifyContent="space-between" alignItems="center" p="1rem" boxShadow="md" position="fixed" zIndex="1000">
                <Image src={logo} alt="DermaConnect logo" height='150px' ml='5rem'/>
                <Spacer />
                <Flex alignItems="center" mr='8rem' >
                    <Button color="white" bg="#0A345C" _hover={{bg:"#072d49"}} mr="2rem">
                     Are you a Dermatologist
                    </Button>
                    <Button colorScheme="blue" variant="outline" borderColor="#0A345C" borderWidth="2px"  mr="2rem" textColor={'black'}>
                     Login
                    </Button>
                    <IconButton icon={<FontAwesomeIcon icon={faUser} />} aria-label='Contact Us' color="#00BFFF" bg="transparent" _hover={{ color: "#072d49", bg: "transparent" }} isRound  fontSize='2.0rem'/>
                </Flex>
            </Box>
        
        </>
    )
}
export default Navbar;