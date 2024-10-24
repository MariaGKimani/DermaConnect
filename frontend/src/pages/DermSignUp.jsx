import React from "react";
import { 
  Box, Button, FormControl, Image, FormLabel, Input, Select, Textarea, Flex, RadioGroup, Radio,
  Heading
} from "@chakra-ui/react";
import logo from "../assets/Pink_Minimal_Skincare___Hair_Free_Logo__1_-removebg-preview.png";

const DermatologistSignupForm = () => {
  return (
    <Box p={'8'} borderWidth="1px" borderRadius="lg">
      <Box textAlign="center" mb={0}>
        <Image src={logo} alt='dermaconnect-logo' height='200px' ml={'-3.5rem'}/>
      </Box>
      <Heading as="h1" fontSize="3xl" fontWeight="bold" mt={'-2rem'} mb={'1rem'} >
        CREATE AN ACCOUNT
      </Heading>

      <Flex justify="space-between" align="flex-start" w="100%">
        <Flex direction="column" w="60%" gap={4}>
          <Flex w="100%" gap={4}>
            <FormControl isRequired>
              <FormLabel fontWeight="bold">First Name</FormLabel>
              <Input placeholder="First Name" borderColor="#0A345C"  focusBorderColor="#0A345C"/>
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight="bold">Last Name</FormLabel>
              <Input placeholder="Last Name" borderColor="#0A345C"  focusBorderColor="#0A345C"/>
            </FormControl>
          </Flex>

          <Flex w="100%" gap={4}>
            <FormControl isRequired>
              <FormLabel fontWeight="bold">Number</FormLabel>
              <Input placeholder="(+92)..." borderColor="#0A345C"  focusBorderColor="#0A345C" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight="bold">Email Address</FormLabel>
              <Input placeholder="example@domain.com" borderColor="#0A345C"  focusBorderColor="#0A345C" />
            </FormControl>
          </Flex>
          
          <Flex w="100%" gap={4}>
            <FormControl isRequired>
              <FormLabel fontWeight="bold">Password</FormLabel>
              <Input type="password" placeholder="Password" borderColor="#0A345C"  focusBorderColor="#0A345C"/>
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight="bold">Confirm Password</FormLabel>
              <Input type="password" placeholder="Confirm Password" borderColor="#0A345C"  focusBorderColor="#0A345C" />
            </FormControl>
          </Flex>

          <Flex w="100%" gap={4}>
            <FormControl>
              <FormLabel fontWeight="bold">Country</FormLabel>
              <Input placeholder="Country" borderColor="#0A345C"  focusBorderColor="#0A345C" />
            </FormControl>

            <FormControl>
              <FormLabel fontWeight="bold">City</FormLabel>
              <Input placeholder="City" borderColor="#0A345C"  focusBorderColor="#0A345C" />
            </FormControl>
          </Flex>

          <Flex w="100%" gap={4}>
            <FormControl>
              <FormLabel fontWeight="bold">Medical ID</FormLabel>
              <Input placeholder="Medical ID" borderColor="#0A345C"  focusBorderColor="#0A345C" />
            </FormControl>

            <FormControl>
              <FormLabel fontWeight="bold">Level of Education</FormLabel>
              <Select placeholder="Select education level" borderColor="#0A345C"  focusBorderColor="#0A345C" >
                <option value="undergraduate">Undergraduate</option>
                <option value="graduate">Graduate</option>
                <option value="postgraduate">Postgraduate</option>
              </Select>
            </FormControl>
          </Flex>
        </Flex>

        <Flex direction="column" w="35%" gap={4} align="flex-start">
          <Heading as="h3" size="lg" fontWeight="bold" >
            Attach documents
          </Heading>
          <Flex w="100%" gap={10}>
            <Flex direction="column" gap={14} w="50%">
              <FormControl>
                <FormLabel fontWeight="bold">Professional Photo</FormLabel>
                <Input type="file" color="#48484B" />
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="bold">Medical License</FormLabel>
                <Input type="file" color="#48484B" />
              </FormControl>
            </Flex>

            <Flex direction="column" gap={14} w="50%">
              <FormControl>
                <FormLabel fontWeight="bold">Qualification/Degrees</FormLabel>
                <Input type="file" color="#48484B" />
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="bold" >Upload ID/Passport</FormLabel>
                <Input type="file" color="#48484B" />
              </FormControl>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex justify="space-between" align="flex-start" w="100%" gap={10} >
        <Flex direction="column" w="60%">
          <FormControl>
            <FormLabel fontWeight="bold" mt={5} >Describe Your Expertise and Services</FormLabel>
            <Textarea placeholder="Describe your services" borderColor="#0A345C"  focusBorderColor="#0A345C"/>
          </FormControl>
        </Flex>

        <Flex direction="column" w="35%" gap={4} align="flex-start" mt={-4}>
          <Heading as="h3" size="lg" fontWeight="bold" mb={3}>
           Service Charges
          </Heading>
          <Flex w="100%" justify="space-between" gap={10}>
          
            <Flex direction="column" gap={4} w="50%">
              <FormControl>
                <FormLabel fontWeight="bold">Consultation fees</FormLabel>
                <Select placeholder="Select cost" borderColor="#0A345C" focusBorderColor="#0A345C">
                  <option value="500">1000</option>
                  <option value="1000">2000</option>
                  <option value="1000">3000</option>
                 
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel fontWeight="bold">Cost per Session</FormLabel>
                <Select placeholder="Select cost" borderColor="#0A345C" focusBorderColor="#0A345C">
                  <option value="500">5000</option>
                  <option value="1000">10000</option>
                </Select>
              </FormControl>
            </Flex>

            <Flex direction="column" gap={14} w="50%">
              <FormControl>
                <FormLabel fontWeight="bold">Payment Method</FormLabel>
                <RadioGroup defaultValue="Mpesa">
                  <Flex direction="row" gap={4}>
                    <Radio value="Mpesa">Mpesa</Radio>
                    <Radio value="Card">Card</Radio>
                  </Flex>
                </RadioGroup>
              </FormControl>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Box mt={8} display="flex" justifyContent="center">
        <Button 
          bg={'#0A345C'} 
          color="white" 
          size='lg' 
          px={28}
          _hover={{
            bg: 'transparent',
            color: '#0A345C', 
            border: '2px solid #0A345C',
          }}
        >
          Signup
        </Button>
      </Box>
    </Box>
  );
};

export default DermatologistSignupForm;
