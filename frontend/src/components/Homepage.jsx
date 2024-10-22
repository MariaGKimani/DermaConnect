import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box, Heading, Text, Button, Flex, Stack, Image, Divider, Spacer, Avatar } from '@chakra-ui/react';
import skinImage from '../assets/HOMEPAGE1.jpg'
import skinButton from '../assets/HOMEPAGE 2.webp'
import Image1 from '../assets/download (1).jpeg'
import Image2 from '../assets/download.jpeg'
import Image3 from '../assets/images.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faHandshake, faLightbulb } from '@fortawesome/free-solid-svg-icons';




const Homepage = () => {
    return (
        <>
            <Box>
                <Navbar />
                {/* First box */}
            <Box height="80vh" display="flex" alignItems="center" justifyContent="flex-end" position="relative" backgroundImage={`url(${skinImage})`} backgroundSize="cover" backgroundPosition='center' backgroundRepeat='no-repeat' pt='210px' >
                <Flex flexDirection="row" alignItems="center" justifyContent='center'  ml='15%' >
                    <Box textAlign="centre" p="2rem">
                        <Heading as="h2" size="4xl" color="#0A345C" >Your skin,<br/>Your Confidence.</Heading>
                        <Text fontSize="3xl" color="gray.600" mt="1rem">
                             Book Dermatologists with Ease                        
                        </Text>
                        <Text mt="1rem" fontSize="2xl" color="gray.500">
                            Let us help you glow
                        </Text>
                        <Button mt="2rem" colorScheme="teal" size="lg" alignItems='center' bg="#0A345C" _hover={{ bg: "#072d49" }}>
                            Book an Appointment
                        </Button>
                    </Box>
                </Flex>
            </Box>

            {/* What we do Section */}
            <Box mt="5rem" mb="5rem" textAlign="center">
                <Heading as="h2" size="xl" color="#0A345C">What we do</Heading>
                <Flex mt="3rem" justifyContent="space-around" px="2rem">
                    <Box maxW="250px">
                        <FontAwesomeIcon icon={faCalendarCheck} size="3x" color="#00BFFF" />                      
                        <Heading as="h3" size="md" color="#000000" mt="1rem">Dermatology Booking</Heading>
                        <Text mt="1rem" color="gray.600">
                            Schedule appointments with certified dermatologists instantly.
                        </Text>
                    </Box>
                    <Box maxW="250px">
                        <FontAwesomeIcon icon={faHandshake} size="3x" color="#00BFFF" />
                        <Heading as="h3" size="md" color="#000000" mt="1rem">Connect with Experts</Heading>
                        <Text mt="1rem" color="gray.600">
                            Consult skincare professionals for personalized advice.
                        </Text>
                    </Box>
                    <Box maxW="250px">
                        <FontAwesomeIcon icon={faLightbulb} size="3x" color="#00BFFF" />
                        <Heading as="h3" size="md" color="#000000" mt="1rem">Skin Care Insights</Heading>
                        <Text mt="1rem" color="gray.600">
                            Stay updated with tips and articles on skincare.
                        </Text>
                    </Box>
                </Flex>
            </Box>

            <Divider />

            {/* {explore} */}

            <Box bg="#E0F7FA" py="4rem" px="2rem" textAlign="center">
                <Flex alignItems="center" justifyContent="center">
                    <Image 
                        src={skinButton} 
                        alt="Skin condition" 
                        boxSize="300px" 
                        objectFit="cover" 
                        borderRadius="md"
                    />
                    <Box ml="18rem" textAlign="left">
                        <Text fontSize="xl" fontStyle="italic" color="#333333">
                            "No matter your skin condition,<br/> we're here to guide you with <br/>expert tips for healthier, glowing skin.<br/> Start your journey to clear skin today!"
                        </Text>
                        <Flex mt="2rem">
                            <Button colorScheme="teal" size="md" mr="1rem" bg="#0A345C" _hover={{ bg: "#072d49" }}>
                                Explore skincare tips
                            </Button>
                            <Button colorScheme="teal" size="md" bg="#0A345C" _hover={{ bg: "#072d49" }}>
                                Find a dermatologist
                            </Button>
                        </Flex>
                    </Box>
                </Flex>
            </Box>

            {/* Testimonials Section */}
            <Box bg="#F5F5F5" py="4rem" px="2rem" textAlign="center">
                <Flex justifyContent="space-around" flexWrap="wrap">
                    <Box maxW='300px' textAlign='center' mb='2rem'>
                        <Avatar src={Image1} size="xl"/>
                        <Heading as="h3" size="md" mt={"1rem"} mb={"0.5rem"}> Joy Wambui</Heading>
                        <Flex justifyContent="center">
                            {[...Array(5)].map((_, i) => (
                                <Box key={i} color="blue.400" fontSize="lg">★</Box>
                            ))}
                        </Flex>
                        <Text mt="1rem" color="gray.600">
                            I had an amazing experience with Dr. Smith. The booking process was seamless, and the consultation was incredibly thorough. Highly recommend!
                        </Text>
                    </Box>

                    <Box maxW="300px" textAlign="center" mb="2rem">
                        <Avatar src={Image2} size="xl" />
                        <Heading as="h3" size="md" mt="1rem" mb="0.5rem">Elizabeth Kuria</Heading>
                        <Flex justifyContent="center">
                            {[...Array(5)].map((_, i) => (
                                <Box key={i} color="blue.400" fontSize="lg">★</Box>
                            ))}
                        </Flex>
                        <Text mt="1rem" color="gray.600">
                            DermaConnect made it effortless to connect with Dr. Patel. The follow-up care and advice provided were exceptional. I feel much more confident about my skin now.
                        </Text>
                    </Box>

                    <Box maxW="300px" textAlign="center" mb="2rem">
                        <Avatar src={Image3} size="xl" />
                        <Heading as="h3" size="md" mt="1rem" mb="0.5rem">Gavin Kimani</Heading>
                        <Flex justifyContent="center">
                            {[...Array(5)].map((_, i) => (
                                <Box key={i} color="blue.400" fontSize="lg">★</Box>
                            ))}
                        </Flex>
                        <Text mt="1rem" color="gray.600">
                            Finding a top-notch dermatologist was so easy with DermaConnect. Dr. Johnson not only helped clear my acne but also educated me on the best skincare practices.
                        </Text>
                    </Box>

                </Flex>  
            </Box>
                <Footer/>  
            </Box>
        </>
    );
};

export default Homepage;
