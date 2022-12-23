import React from 'react'
import { Box, Container, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"
import { BsThreeDots } from "react-icons/bs"

const Post = () => {
  return (
    <>
      <Container
        height={'1000px'}
        maxW={'100%'}
        bgColor={'rgb(250,250,250)'}
        border={'1px'}
        borderColor={'black'}
      >
        <Flex
          direction={'column'}
          w={'480px'}
          h={'auto'}
          bgColor={'white'}
          m={'auto'}
          my={'15px'}
          border={'1px'}
          borderColor={'gray.200'}
          borderRadius={'10px'}
        >
          <Flex
            direction={'row'}
            p={'10px'}
            h={'58px'}
            w={'100%'}
            alignItems={'center'}
            // border={'1px'}
            // borderColor={'blue'}
          >
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              w={'85%'}
              h={'100%'}
              // border={'1px'}
              // borderColor={'red'}
            >
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                mr={'20px'}
                w={'10%'}
                h={'100%'}
                // border={'1px'}
                // borderColor={'green'}
                borderRadius={'50%'}
                overflow={'hidden'}
                objectFit={'contain'}
              >
                <Image src='/user.jpeg' width={100} height={100} />
              </Box>
              <Text
                fontWeight={"500"}
              >UserName</Text>
            </Box>
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              w={'15%'}
              h={'100%'}
              cursor={'pointer'}
              // border={'1px'}
              // borderColor={'red'}
            >
              <BsThreeDots />
            </Box>
          </Flex>
          <Box
            w={'100%'}
            h={'585px'}
            display={'flex'}
            bgColor={'black'}
            alignItems={'center'}
            justifyContent={'center'}
            border={'1px'}
            borderColor={'black'}
            overflow={'hidden'}
            objectFit={'contain'}
          >
            <Image src='/post.jpg' width={500} height={700} />
          </Box>
          <Flex
            direction={'column'}
            h={'140px'}
            w={'100%'}
            border={'1px'}
            borderColor={'black'}
          >
            <Flex
              alignItems={"center"}
              w={'100%'}
              h={'45px'}
              px={'12px'}
              pt={'4px'}
              pb={'6px'}
              border={'1px'}
              borderColor={'blue'}
            ></Flex>
            <Flex
              alignItems={"center"}
              w={'100%'}
              h={'18px'}
              px={'12px'}
              pt={'4px'}
              pb={'8px'}
              border={'1px'}
              borderColor={'blue'}
            ></Flex>
            <Flex
              alignItems={"center"}
              w={'100%'}
              h={'26px'}
              px={'12px'}
              border={'1px'}
              borderColor={'blue'}
            ></Flex>
            <Flex
              alignItems={"center"}
              w={'100%'}
              h={'50px'}
              px={'16px'}
              py={'4px'}
              border={'1px'}
              borderColor={'blue'}
            ></Flex>
          </Flex>
        </Flex>
      </Container>
    </>
  )
}

export default Post