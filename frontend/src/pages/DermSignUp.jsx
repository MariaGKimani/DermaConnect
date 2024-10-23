import React from "react";
import { 
  Box, Button, FormControl,Image, FormLabel, Input, Select,Textarea, Stack, HStack, VStack, RadioGroup, Radio, Flex
} from "@chakra-ui/react";
import logo from "../assets/Pink_Minimal_Skincare___Hair_Free_Logo__1_-removebg-preview.png"


const DermatologistSignupForm = () => {
  return (
    <Box p={'8'} borderWidth="1px" borderRadius="lg">
      <Box textAlign="center" mb={5}>
        <Image src={logo} alt='dermaconnect-logo' height='200px' ml='-5rem'/>
      </Box>
      <Box as="h1" fontSize="2xl" fontWeight="bold" textAlign="center" mb={'0'} >
        CREATE AN ACCOUNT
      </Box>

      <Flex justify="space-between" align="flex-start" w="100%" >
        <VStack w="60%" spacing={4}>
          <HStack w="100%" spacing={4}>
            <FormControl isRequired>
              <FormLabel   fontWeight="bold">First Name</FormLabel>
              <Input placeholder="First Name" borderColor="#0A345C"  />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight="bold">Last Name</FormLabel>
              <Input placeholder="Last Name" borderColor="#0A345C"/>
            </FormControl>
          </HStack>

          <HStack w="100%" spacing={4}>
            <FormControl isRequired>
              <FormLabel fontWeight="bold">Number</FormLabel>
              <Input placeholder="(+92)..." borderColor="#0A345C" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight="bold">Email Address</FormLabel>
              <Input placeholder="example@domain.com" borderColor="#0A345C" />
            </FormControl>
          </HStack>

          <HStack w="100%" spacing={4}>
            <FormControl isRequired>
              <FormLabel fontWeight="bold">Password</FormLabel>
              <Input type="password" placeholder="Password" borderColor="#0A345C"/>
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight="bold">Confirm Password</FormLabel>
              <Input type="password" placeholder="Confirm Password" borderColor="#0A345C" />
            </FormControl>
          </HStack>

          <HStack w="100%" spacing={4}>
            <FormControl>
              <FormLabel fontWeight="bold">Country</FormLabel>
              <Input placeholder="Country" borderColor="#0A345C" />
            </FormControl>

            <FormControl>
              <FormLabel fontWeight="bold">City</FormLabel>
              <Input placeholder="City" borderColor="#0A345C" />
            </FormControl>
          </HStack>

          <HStack w="100%" spacing={4}>
            <FormControl>
              <FormLabel fontWeight="bold">Medical ID</FormLabel>
              <Input placeholder="Medical ID" borderColor="#0A345C" />
            </FormControl>

            <FormControl>
              <FormLabel fontWeight="bold">Level of Education</FormLabel>
              <Select placeholder="Select education level" borderColor="#0A345C" >
                <option value="undergraduate">Undergraduate</option>
                <option value="graduate">Graduate</option>
                <option value="postgraduate">Postgraduate</option>
              </Select>
            </FormControl>
          </HStack>
        </VStack>

        {/* Right Side: File Uploads with Heading */}
        <VStack w="35%" spacing={4} align="flex-start">
          <Box fontSize="lg" fontWeight="bold" mb={4}>
            Attach documents
          </Box>

          {/* Flex container for file uploads */}
          <HStack w="100%" spacing={10}>
            <VStack spacing={14} w="50%">
              <FormControl>
                <FormLabel fontWeight="bold">Professional Photo</FormLabel>
                <Input type="file" color="white"  />
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="bold">Medical License</FormLabel>
                <Input type="file" color="white"  />
              </FormControl>
            </VStack>

            <VStack spacing={14} w="50%">
              <FormControl>
                <FormLabel fontWeight="bold">Qualification/Degrees</FormLabel>
                <Input type="file" color="white" />
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="bold">Upload ID/Passport</FormLabel>
                <Input type="file"  color="white"  />
              </FormControl>
            </VStack>
          </HStack>
        </VStack>
      </Flex>

      <Flex justify="space-between" align="flex-start" w="100%" spacing={10}>
        <VStack w="60%" >
          <FormControl>
            <FormLabel fontWeight="bold">Describe Your Expertise and Services</FormLabel>
            <Textarea placeholder="Describe your services"  _placeholder={{ color: "#0A345C" }} />
          </FormControl>
        </VStack>

        <VStack w="35%" spacing={4} align="flex-start">
          <Flex w="100%" justify="space-between" spacing={10}>
            <VStack spacing={4} w="50%">
              <FormControl>
                <FormLabel fontWeight="bold">Consultation Fees</FormLabel>
                <Select placeholder="5000-10000">
                  <option value="5000">5000</option>
                  <option value="10000">10000</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="bold">Cost per Session</FormLabel>
                <Select placeholder="Select cost" >
                  <option value="500">500</option>
                  <option value="1000">1000</option>
                </Select>
              </FormControl>
            </VStack>
            <Spacer />

            <VStack spacing={14} w="50%">
              <FormControl>
                <FormLabel fontWeight="bold">Payment Method</FormLabel>
                <RadioGroup defaultValue="Mpesa">
                  <Stack direction="row">
                    <Radio value="Mpesa">Mpesa</Radio>
                    <Radio value="Card">Card</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
            </VStack>
          </Flex>
        </VStack>
      </Flex>

      {/* Submit Button */}
      <Box mt={8}>
            <Button bg={'#0A345C'} color="white" size='lg' _hover={{bg: 'transparent',color: '#0A345C', border: '2px solid #0A345C',}}>
            Signup
            </Button>
       </Box>

    </Box>
  );
};

export default DermatologistSignupForm;