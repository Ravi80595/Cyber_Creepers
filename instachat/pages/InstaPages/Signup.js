import { Box, Button, Container, Heading, Input, Text } from '@chakra-ui/react'
import axios from "axios";
import React, { useState } from 'react'
import Link from 'next/link'

const Signup = () => {

  const [signupForm, setSignupForm] = useState({
    email : "",
    fullname : "",
    username : "",
    password : ""
  })

  const handleSignupForm = (e) => {
    // console.log('abhay')
    let {name,value} = e.target;
    setSignupForm({
      ...signupForm,
      [name] : value      
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(signupForm.email === ""){
      alert("Email is Required");
    }
    else if(!signupForm.email.includes("@")){
      alert("Email should include @");
    }
    else if(signupForm.password === ""){
      alert("password is required");
    }
    else if(signupForm.password.length < 6){
      alert("Password should have more than 6 characters");
    }
    else{
      const payload = {
        email : signupForm.email,
        fullname : signupForm.fullname,
        username : signupForm.username,
        password : signupForm.password
      }
      console.log(payload);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const data = await axios.post(
          "http://localhost:3000/api/User/Usersign",
          payload,config
        );
        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        localStorage.setItem("userdata", JSON.stringify(data.data.userdata));
      }
      catch (error) {
        console.log(error);
      }
    }
  }


  return (
    <>
      <Container
         h={"760px"}
         maxW={'100%'}
         bgColor={'rgb(250,250,250)'}
        //  border={'1px'}
        //  borderColor={'black'}
      >
        <Box
          display={'flex'}
          h={"100%"}
          maxW={'100%'}
          mb={"50px"}
          // border={'1px'}
          // borderColor={'black'}
        >
          <Box
            m={'auto'}
            h={'400px'}
            w={'350px'}
            bgColor={'white'}
            // border={'1px'}
            // borderColor={'black'}
          >
            <Box
              m={'auto'}
              mb={'10px'}
              py={'10px'}
              h={'100%'}
              maxW={'100%'}
              border={'1px'}
              borderColor={'gray.300'}
            >
              <Box
                m={'auto'}
                h={'55px'}
                w={'100%'}
                mt={'36px'}
                mb={'12px'}
                // bgImage={png}
                // border={'1px'}
                // borderColor={'blue'}
              >
                <Heading
                  color={'tomato'}
                  textAlign={'center'}
                  // fontFamily={"cursive"}
                >InstaChat</Heading>
              </Box>
              <form
                direction={'column'}
                m={'auto'}
                pt={'24px'}
                h={'265px'}
                w={'100%'}  
                mb={'10px'}
                
                // border={'1px'}
                // borderColor={'blue'}
              >
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  h={'38px'}
                  w={'100%'}
                  // border={'1px'}
                  // borderColor={'green'}
                  px={'40px'}
                  // pb={'6px'}
                >
                  <Input 
                    h={'28px'} 
                    type={'text'} 
                    fontSize={'13px'}
                    name="email"
                    value={signupForm.email}
                    onChange={handleSignupForm}
                    id="Email" 
                    placeholder='Enter Your Email' />
                </Box>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  h={'38px'}
                  w={'100%'}
                  // border={'1px'}
                  // borderColor={'green'}
                  px={'40px'}
                  // pb={'6px'}
                >
                  <Input 
                    h={'28px'} 
                    type={'text'} 
                    fontSize={'13px'}
                    value={signupForm.fullname}
                    onChange={handleSignupForm}
                    name="fullname"
                    id="fullname" 
                    placeholder='Full Name' />
                </Box>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  h={'38px'}
                  w={'100%'}
                  // border={'1px'}
                  // borderColor={'green'}
                  px={'40px'}
                  // pb={'6px'}
                >
                  <Input 
                    h={'28px'} 
                    type={'text'} 
                    fontSize={'13px'}
                    value={signupForm.username}
                    onChange={handleSignupForm}
                    name="username"
                    id="username"  
                    placeholder='Username' />
                </Box>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  h={'38px'}
                  w={'100%'}
                  // border={'1px'}
                  // borderColor={'green'}
                  px={'40px'}
                  // pb={'6px'}
                >
                  <Input 
                    h={'28px'} 
                    fontSize={'13px'}
                    value={signupForm.password}
                    onChange={handleSignupForm}
                    name="password"
                    id="password"  
                    type={'password'}
                    placeholder='Password' />
                </Box>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  h={'38px'}
                  w={'100%'}
                  // border={'1px'}
                  // borderColor={'green'}
                  px={'40px'}
                  // pb={'6px'}
                >
                  <Button
                    w={'100%'}
                    h={'28px'}
                    bgColor={'#47afff'}
                    fontSize={'12px'}
                    color={'white'}
                    border={'none'}
                    onClick={handleSubmit}
                  >Sign up</Button>
                </Box>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  h={'38px'}
                  w={'100%'}
                  // border={'1px'}
                  // borderColor={'green'}
                  px={'40px'}
                  // pb={'6px'}
                >
                  <Text
                    fontSize={'12px'}
                    color={'gray.400'}
                    fontWeight={'500'}
                  >OR</Text>
                </Box>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  h={'38px'}
                  w={'100%'}
                  // border={'1px'}
                  // borderColor={'green'}
                  px={'40px'}
                  // pb={'6px'}
                >
                  <Text 
                    fontSize={'13px'} 
                  >
                    Have an account? 
                    <Button 
                    cursor={'pointer'} 
                    fontWeight={'600'} 
                    fontSize={'13px'} 
                    color={'#47afff'} 
                    as={'span'}
                    bg={"white"}
                    >
                     <Link legacyBehavior href="/InstaPages/Login" >
                      <a >Login</a>
                      </Link>

                    </Button>
                  </Text>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Signup
