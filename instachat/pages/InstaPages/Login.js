import { Box, Button, Container, Flex, Heading, Image, Input, Text } from '@chakra-ui/react'
import axios from "axios";
import React, { useState } from 'react'

const Login = () => {

  const [loginForm, setLoginForm] = useState({
    email : "",
    password : ""
  });

  const handleLoginForm = (e) => {
    console.log('abhay');
    let {name,value} = e.target;
    setLoginForm({
      ...loginForm,
      [name] : value      
    })
  }

  const handleSubmit = async (e) =>{
    console.log('kalesha')
    e.preventDefault();
    if(loginForm.email === ""){
      alert("Email is Required");
    }
    else if(!loginForm.email.includes("@")){
      alert("Email should include @");
    }
    else if(loginForm.password === ""){
      alert("password is required");
    }
    else if(loginForm.password.length < 6){
      alert("Password should have more than 6 characters");
    }
    else{
      const payload = {
        email : loginForm.email,
        password : loginForm.password
      }
      console.log(payload);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const data  = await axios.post(
          "http://localhost:3000/api/User/Userlogin",
          payload,config
        );
        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data.data.tokens));
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
            h={'380px'}
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
                    name={'email'}
                    value={loginForm.email}
                    onChange={handleLoginForm}
                    placeholder='Phone number,username, or email' />
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
                    type={'password'} 
                    name={'password'}
                    value={loginForm.password}
                    onChange={handleLoginForm}
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
                    onClick={handleSubmit}
                    border={'none'}
                  >Log in</Button>
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
                    Don't have an account? 
                    <Text 
                    cursor={'pointer'} 
                    fontWeight={'600'} 
                    fontSize={'13px'} 
                    color={'#47afff'} 
                    as={'span'}
                    >
                      Sign up
                    </Text>
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

export default Login
