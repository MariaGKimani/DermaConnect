import React, { useState } from "react";
import { Box,Heading,Image,Text,Flex,IconButton,FormControl,FormLabel,Input,RadioGroup,Radio,Stack, Button} from "@chakra-ui/react";
import { PhoneIcon,EmailIcon,TimeIcon,CalendarIcon,InfoIcon,CheckIcon,MinusIcon } from "@chakra-ui/icons";
import { FaSchool,FaMoneyBill } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import doc1 from "../assets/doc1.png"
import doc2 from "../assets/doc2.png"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DermatologistProfile = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    return (
        <>
        <Navbar />
        <Box bgColor='#86BBF1' height='35vh'></Box>
        <Box display='flex' mt='-9rem' justifyContent='space-between'>
            <Box ml='15rem'>
                <Box bgColor='#FCFCFC' width='20vw' height='35vh' borderRadius='10px'>
                    <Image src={doc1} alt='black dermatologist' height='35vh' ml='1.2rem'/>
                </Box>
                <Flex mt='4rem'>
                    <InfoIcon color='#00BFFF' fontSize='1.1rem' mt='0.2rem'/>
                    <Heading size='md' ml='0.5rem'>Contact Info</Heading>
                </Flex>
                <Flex mt='1rem'>
                    <PhoneIcon color='#00BFFF' fontSize='1rem' mt='0.3rem'/>
                    <Text ml='0.5rem'>+123+456-7890</Text>
                </Flex>
                <Flex mt='1rem'>
                    <EmailIcon color='#00BFFF' fontSize='1rem' mt='0.3rem'/>
                    <Text ml='0.5rem'>sarahlee@prohealth.com</Text>
                </Flex>
            </Box>

            <Box mr='14rem'>
                <Heading>Dr. Sarah Lee, MD, MPH, FAPA</Heading>
                <Text width='30vw' mt='1rem'>With more than 15 years of experience learning human psychology and behavior, Dr. Jones is an exper managing mood disorders and anxiety disorders</Text>
                <Flex mt='5rem'>
                    <FaSchool color='#00BFFF' fontSize='1.1rem'/>
                    <Heading size='md' ml='0.5rem'>Education</Heading>
                </Flex>
                <Flex mt='1rem'>
                   <MinusIcon fontSize='1rem' mt='0.2rem' color='#00BFFF'/> 
                   <Text ml='0.5rem'>University of California, San Francisco.</Text>
                </Flex>
                <Flex mt='1rem'>
                   <MinusIcon fontSize='1rem' mt='0.2rem' color='#00BFFF'/> 
                   <Text ml='0.5rem'>Medical degree</Text>
                </Flex>

                <Flex mt='3rem'>
                    <FaMoneyBill color='#00BFFF' fontSize='1.3rem'/>
                    <Heading size='md' ml='0.5rem'>Service Charges</Heading>
                </Flex>
                <Flex mt='1rem'>
                    <Text>Consultation Fees:</Text>
                    <Text ml='6rem'>Ksh 5,000</Text>
                </Flex>
                <Flex mt='1rem'>
                    <Text>Cost Per Session:</Text>
                    <Text ml='6.4rem'>Ksh 20,000</Text>
                </Flex>
                <Flex mt='1rem'>
                    <Text>Payment method:</Text>
                    <Flex>
                        <Flex ml='6.5rem'>
                            <IconButton size='sm'><CheckIcon color='#00BFFF' fontSize='1rem'/></IconButton>
                            <Text ml='0.5rem'>Mpesa</Text>
                        </Flex>
                        <Flex>
                            <IconButton size='sm' ml='3rem'><CheckIcon color='#00BFFF' fontSize='1rem'/></IconButton>
                            <Text ml='0.5rem'>Card</Text>
                        </Flex>
                    </Flex>
                </Flex>               
            </Box>
        </Box>
        <Box display='flex' bgColor='#D1EEF4' mt='5rem' p='4rem' justifyContent='space-between'>
           <Image src={doc1} alt='black dermatologist' height='50vh' ml='5rem' mb='2rem'/> 
           <Box mr='12rem' mt='2rem'>
                <Heading>Book An Appointment</Heading>
                <form>
                    <Flex>
                        <FormControl mt='2rem'>
                            <FormLabel mb='-0.5rem'>Name</FormLabel>
                                <Input borderColor='#BAB5B5' width='13vw' mt='1rem'/>
                        </FormControl>  
                        <FormControl mt='2rem' ml='3.5rem'>
                        <FormLabel mb='-0.5rem'>Phone Number</FormLabel>
                            <Input borderColor='#BAB5B5' width='13vw' mt='1rem'/>
                    </FormControl>  
                    </Flex>
                    <Flex>
                        <FormControl mt="2rem">
                            <FormLabel mb="-0.5rem">Preferred Date</FormLabel>
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="MMMM d, yyyy"
                                customInput={<Input borderColor="#BAB5B5" width="13vw" mt="1rem" />}
                            />
                        </FormControl>
                        <FormControl mt="2rem" ml="3.5rem">
                            <FormLabel mb="-0.5rem">Preferred Time</FormLabel>
                            <DatePicker
                                selected={selectedTime}
                                onChange={(time) => setSelectedTime(time)}
                                showTimeSelect
                                showTimeSelectOnly
                                dateFormat="h:mm aa"
                                customInput={<Input borderColor="#BAB5B5" width="13vw" mt="1rem" />}
                            />
                        </FormControl>
                    </Flex>
                    <Text mt='2rem'>Reason for visit</Text>
                    <RadioGroup mt='1rem'>
                        <Stack direction='row'>
                            <Radio colorScheme="#00BFFF" bgColor='#00BFFF'>Routine Checkup</Radio>
                            <Radio colorScheme="#00BFFF" bgColor='#00BFFF' ml='2.5rem'>New Patient Visit</Radio>
                            <Radio colorScheme="#00BFFF" bgColor='#00BFFF' ml='2.5rem'>Specific Concern</Radio>
                        </Stack>
                    </RadioGroup>
                    <Button type='submit' mt='2rem' bgColor='#0A345C' colorScheme="#0A345C" color='#FFFFFF' width='29vw'>Submit</Button>
                </form>
           </Box>
        </Box>
        <Box display='flex' p='5rem' ml='10rem' justifyContent='space-between'>
            <Box mt='8rem'>
                <Heading color='#0A345C'>Don't Let Your Skin Take a Backseat!</Heading>
                <Text mt='1rem'>Schedule an appointment with one of our experienced medical professionals today!</Text>
            </Box>
            <Image src={doc2} alt="male black doctor" mr='10rem' mb='2rem'/>
        </Box>
        <Footer />
        </>
    )
}
export default DermatologistProfile;
