import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Grid, GridItem, Box, Image, Text, Button, Flex } from "@chakra-ui/react";


const dermatologists = [
    { 
      id: 1, 
      name: 'Dr. John Smith', 
      title: 'Dermatologist', 
      image: 'https://my1healthstorage.blob.core.windows.net/my1health/profiles/dr-abdiaziz-mohamed.jpg', 
      description: 'Dr. John has over 10 years of experience in dermatology and is board certified. He has a special interest in skincare treatments and patient wellness.'
    },
    { 
      id: 2, 
      name: 'Dr. Jane Doe', 
      title: 'Dermatologist', 
      image: 'https://springstderm.com/wp-content/uploads/2021/04/sapna-palep-board-certified-dermatologist-spring-street-dermatology-New-York-City-NY.jpeg', 
      description: 'Dr. Jane specializes in advanced dermatological procedures with a focus on aesthetic skincare. Her research focuses on skin rejuvenation.'
    },
    { 
      id: 3, 
      name: 'Dr. Emily White', 
      title: 'Dermatologist', 
      image: 'https://www.spectrumdermatologyseattle.com/wp-content/uploads/2024/07/Roshni-Changela-Headshot-Edit-1.webp', 
      description: 'Dr. Emily is known for her expertise in treating skin conditions like eczema and psoriasis. She uses a holistic approach for patient care.'
    },
    { 
      id: 4, 
      name: 'Dr. Michael Brown', 
      title: 'Dermatologist', 
      image: 'https://www.irishdermatologists.ie/images/member_photos/photo_372.jpg', 
      description: 'With 15 years of experience, Dr. Michael is an expert in medical dermatology, specializing in skin cancer prevention and treatment.'
    },
    { 
      id: 5, 
      name: 'Dr. Sarah Johnson', 
      title: 'Dermatologist', 
      image: 'https://www.kelsey-seybold.com/-/media/D96C31194A1849919038C9CEBD55C710.ashx', 
      description: 'Dr. Sarah has a passion for pediatric dermatology and offers specialized care for children and adolescents with skin conditions.'
    },
    { 
      id: 6, 
      name: 'Dr. Chris Lee', 
      title: 'Dermatologist', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-J-ejCEIkJQ8agLruUcR1FLnlCWPsrFZpA&s', 
      description: 'Dr. Chris is a board-certified dermatologist focused on cosmetic dermatology, including laser treatments and chemical peels.'
    },
    { 
      id: 7, 
      name: 'Dr. Laura Garcia', 
      title: 'Dermatologist', 
      image: 'https://www.isdin.com/us/blog/wp-content/uploads/2020/10/Dermatologist-Recommended-Sunscreens-ISDIN-1170x600.png', 
      description: 'Dr. Laura specializes in acne treatment and scar revision. She is also an advocate for sun protection and skin cancer awareness.'
    },
    { 
      id: 8, 
      name: 'Dr. David Martinez', 
      title: 'Dermatologist', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGH3lkn8u7_UWZg0H89eto_usVdi6c86Seaw&s', 
      description: 'Dr. David is an expert in treating hyperpigmentation and offers personalized care to patients dealing with skin discoloration issues.'
    },
    { 
      id: 9, 
      name: 'Dr. Anna Rodriguez', 
      title: 'Dermatologist', 
      image: 'https://images.ctfassets.net/yixw23k2v6vo/5enBgGtTtkQybQe7xuExr9/be6a3003d0f61f6ae536ad4451f39fb4/Kindred-Headshot-1.jpg', 
      description: 'Dr. Anna has vast experience in treating sensitive skin, using innovative techniques to help patients manage skin allergies and irritations.'
    },
    { 
      id: 10, 
      name: 'Dr. Robert Wilson', 
      title: 'Dermatologist', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZV7G_iVwLNeeefdnl_YB4PoriLEI7VtuukA&s', 
      description: 'Dr. Robert focuses on anti-aging treatments and is skilled in non-invasive procedures like Botox and dermal fillers.'
    },
    { 
      id: 11, 
      name: 'Dr. Jessica Davis', 
      title: 'Dermatologist', 
      image: 'https://www.datocms-assets.com/61070/1711980823-tonya-mcleod.jpg?auto=format,compress&w=660', 
      description: 'Dr. Jessica specializes in rosacea and offers advanced laser treatments to manage redness and facial veins.'
    },
    { 
      id: 12, 
      name: 'Dr. Daniel Miller', 
      title: 'Dermatologist', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzg5Tno_GAcdrFCZJhrzKOzUTjN3Xc_PSvJQ&s', 
      description: 'Dr. Daniel is a dermatologist with a focus on hair loss and scalp disorders, offering cutting-edge solutions to his patients.'
    },
  ];
  

  const Dermatologist = () => {
    return (
        <>
            <Box>
                <Navbar />
                {/* Heading */}
                <Box mt="100px" textAlign="center">
                    <Text fontSize="3xl" fontWeight="bold" color="#274760">Our Trusted Dermatologists</Text>
                    <Text fontSize="lg" mt={2} color="gray.600">Browse through our certified dermatology professionals ready to assist with your skincare needs.</Text>
                </Box>

                {/* Dermatologist Information */}
                <Box mt="50px" p={4}>
                    <Flex justifyContent="space-around">
                        <Grid templateColumns="repeat(3, 1fr)" gap={65} >
                            {dermatologists.map(dermatologist => (
                            <GridItem key={dermatologist.id}>
                                <Box 
                                    width="350px" 
                                    height="500px" 
                                    background="rgba(209, 238, 244, 0.5)" 
                                    textAlign="center" 
                                    p={4}
                                    position="relative">
                                  
                                    <Box  display="flex" justifyContent="center">
                                        <Image 
                                            src={dermatologist.image} 
                                            alt={dermatologist.name} 
                                            boxSize="200px"                       
                                        />
                                    </Box>
                                    
                                    <Box backgroundColor="white" mt={4} p={4} borderRadius="md">
                                        <Text fontWeight="bold" color="#274760" fontSize="xl">{dermatologist.name}</Text>
                                        <Text color="gray.600" mt={2}>{dermatologist.title}</Text>
                                        
                                        <Text mt={4} color="#274760" fontSize="sm">{dermatologist.description}</Text>
                                    </Box>

                                    <Box display="flex" justifyContent="space-between" mt={4}>
                                        <Button backgroundColor="#0A345C" color="white" _hover={{ backgroundColor: "#082B4A" }}>View Profile</Button>
                                        <Button backgroundColor="#0A345C" color="white" _hover={{ backgroundColor: "#082B4A" }}>Book Appointment</Button>
                                    </Box>

                                </Box>
                            </GridItem>
                        ))}
                    </Grid>
                    </Flex>
                </Box>
                <Footer />
            </Box>
        </>
    );
};

export default Dermatologist;