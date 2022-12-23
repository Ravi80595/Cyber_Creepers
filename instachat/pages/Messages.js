import React from 'react'
import { Box, Flex,Heading,Input,Button,Text,Avatar } from '@chakra-ui/react'

const Messages = () => {
  return (
    <>
      <Flex>
        <Box pb="5" w="20%" border='2px solid black' h="100vh">
          <Text textAlign="center">All Users</Text>
          <Box>
            <hr />
          </Box>
          <Flex p={5} w='80%' m='auto'  _hover={{backgroundColor:"aqua"}}>
          <Avatar
                size="sm"
                name=""
                src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                />
                <Text pl={5} fontSize="20px">Ravi</Text>
          </Flex>
          <Flex p={5} w='80%' m='auto'  _hover={{backgroundColor:"aqua"}}>
          <Avatar
                size="sm"
                name=""
                src="https://cdn-icons-png.flaticon.com/128/3135/3135789.png
                "
                />
                <Text pl={5} fontSize="20px">Sachin</Text>
          </Flex>
          <Flex p={5} w='80%' m='auto'  _hover={{backgroundColor:"aqua"}}>
          <Avatar
                size="sm"
                name=""
                src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                />
                <Text pl={5} fontSize="20px">Abhay</Text>
          </Flex>
        </Box>
        <Box w="80%" border='2px solid black' h="100vh">
        <Box w="105%" h="80px" border='2px solid black' borderLeft="none"></Box>
        <Box w="105%" h="70%" border='2px solid black' borderLeft="none"></Box>
        <Flex>
          <Input placeholder='Enter Messages'></Input>
          <Button>Send</Button>
        </Flex>
        </Box>
      </Flex>
    </>
  )
}

export default Messages
