import React from 'react'
import { Box, Container, Flex, Input, Text, Image } from "@chakra-ui/react"
// import Image from "next/image"
import { BsHeart, BsSave, BsThreeDots } from "react-icons/bs"
import { FaRegComment, FaTelegramPlane } from "react-icons/Fa"

let data = [
  {
    "id": 1,
    "username": "Mart",
    "post": "https://randomwordgenerator.com/img/picture-generator/55e4d1414352ac14f1dc8460962e33791c3ad6e04e507441722a72dc944ccd_640.jpg",
    "like": 13,
    "Avatar": "https://randomuser.me/api/portraits/men/91.jpg"
},
{
    "id": 2,
    "username": "Frederica",
    "post": "https://randomwordgenerator.com/img/picture-generator/54e8d5404950ab14f1dc8460962e33791c3ad6e04e5074417c2f73d6954ccc_640.jpg",
    "desc": "Enteroviral vesicular stomatitis with exanthem",
    "like": 21,
    "Avatar": "https://randomuser.me/api/portraits/men/86.jpg"
},
{
    "id": 3,
    "username": "Beulah",
    "post": "https://randomwordgenerator.com/img/picture-generator/55e6dd4b4256ae14f1dc8460962e33791c3ad6e04e507440762e79d79e44cd_640.jpg",
    "desc": "Nondisp fx of lateral condyle of r femr, 7thR",
    "like": 22,
    "Avatar": "https://randomuser.me/api/portraits/women/17.jpg"
},
{
    "id": 4,
    "username": "Margeaux",
    "post": "https://randomwordgenerator.com/img/picture-generator/53e1d74a4950ac14f1dc8460962e33791c3ad6e04e5074417c2f7dd49345c7_640.jpg",
    "desc": "Burn of second degree of left forearm",
    "like": 54,
    "Avatar": "https://randomuser.me/api/portraits/women/74.jpg"
},
{
    "id": 5,
    "username": "Hana",
    "post": "https://randomwordgenerator.com/img/picture-generator/52e3dd474a56b10ff3d8992cc12c30771037dbf85254794e722a7cd09749_640.jpg",
    "desc": "Abnormal findings on diagnostic imaging of cnsl",
    "like": 86,
    "Avatar": "https://randomuser.me/api/portraits/women/28.jpg"
},
{
    "id": 6,
    "username": "Rochell",
    "post": "https://randomwordgenerator.com/img/picture-generator/57e6d0434c55ab14f1dc8460962e33791c3ad6e04e507440762a7cd19145c4_640.jpg",
    "desc": "Family history of multiple endocrine neoplasia syndrome",
    "like": 68,
    "Avatar": "https://randomuser.me/api/portraits/women/22.jpg"
},
{
    "id": 7,
    "username": "Bellanca",
    "post": "https://randomwordgenerator.com/img/picture-generator/53e2dd444d56a514f1dc8460962e33791c3ad6e04e507440762e7ad39144c1_640.jpg",
    "desc": "Unsp fx low end unsp femr, 7thQ",
    "like": 17,
    "Avatar": "https://randomuser.me/api/portraits/women/22.jpg"
},
{
    "id": 8,
    "username": "Anissa",
    "post": "https://randomwordgenerator.com/img/picture-generator/53e3d342435baa14f1dc8460962e33791c3ad6e04e507440762673d69148cd_640.jpg",
    "desc": "Other recurrent vertebral dislocation, cervical region",
    "like": 67,
    "Avatar": "https://randomuser.me/api/portraits/men/22.jpg"
},
{
    "id": 9,
    "username": "Bernie",
    "post": "https://randomwordgenerator.com/img/picture-generator/anton-darius-2pH3TnjoZ0o-unsplash.jpg",
    "desc": "Disp fx of l ulna styloid pro, 7thQ",
    "like": 73,
    "Avatar": "https://randomuser.me/api/portraits/men/73.jpg"
},
{
    "id": 10,
    "username": "Flory",
    "post": "https://randomwordgenerator.com/img/picture-generator/5ee8d4435754a809ea898279c02132761022dfe05b567648722c7cd4_640.jpg",
    "desc": "Driver of military vehicle injured in traffic accident, init",
    "like": 21,
    "Avatar": "https://randomuser.me/api/portraits/men/51.jpg"
},
{
    "id": 11,
    "username": "Jodee",
    "post": "https://randomwordgenerator.com/img/picture-generator/54e7dd4a4d51aa14f1dc8460962e33791c3ad6e04e507440742f7cd79f48c3_640.jpg",
    "desc": "Corrosion of third degree of right elbow, initial encounter",
    "like": 93,
    "Avatar": "https://randomuser.me/api/portraits/women/32.jpg"
},
{
    "id": 12,
    "username": "Percival",
    "post": "https://randomwordgenerator.com/img/picture-generator/52e4d545485ba814f1dc8460962e33791c3ad6e04e5074417d2d73d3954cc1_640.jpg",
    "desc": "Burn of third degree of left toe(s) (nail), sequela",
    "like": 38,
    "Avatar": "https://randomuser.me/api/portraits/women/33.jpg"
},
{
    "id": 13,
    "username": "Dottie",
    "post": "https://randomwordgenerator.com/img/picture-generator/54e7d7474954a414f1dc8460962e33791c3ad6e04e5074417d2e72d59e44c5_640.jpg",
    "desc": "Oth fx lower end of unsp tibia, init for opn fx type I/2",
    "like": 15,
    "Avatar": "https://randomuser.me/api/portraits/women/75.jpg"
},
{
  "id": 14,
  "username": "Jordan",
  "post": "https://randomwordgenerator.com/img/picture-generator/5fe2d646424faa0df7c5d57bc32f3e7b1d3ac3e45658704c742a7dd594_640.jpg",
  "desc": "Obst due to fb acc left in body fol oth procedure, subs",
  "like": 9,
  "Avatar": "https://randomuser.me/api/portraits/men/11.jpg"
},
{
  "id": 15,
  "username": "Charin",
  "post": "https://randomwordgenerator.com/img/picture-generator/57e9d3414e54b10ff3d8992cc12c30771037dbf85254784a70287bd39144_640.jpg",
  "desc": "Concussion with loss of consciousness of 30 minutes or less",
  "like": 9,
  "Avatar": "https://randomuser.me/api/portraits/women/44.jpg"
},
{
  "id": 16,
  "username": "Colan",
  "post": "https://randomwordgenerator.com/img/picture-generator/54e5d2434953a514f1dc8460962e33791c3ad6e04e507440742f7cd09645cc_640.jpg",
  "desc": "Nondisplaced segmental fracture of shaft of unsp femur",
  "like": 50,
  "Avatar": "https://randomuser.me/api/portraits/men/22.jpg"
},
{
  "id": 17,
  "username": "Tadeas",
  "post": "https://randomwordgenerator.com/img/picture-generator/54e5d2434953a514f1dc8460962e33791c3ad6e04e507440742f7cd09645cc_640.jpg",
  "desc": "Oth fx low end l ulna, subs for opn fx type I/2 w delay heal",
  "like": 90,
  "Avatar": "https://randomuser.me/api/portraits/women/79.jpg"
},
{
  "id": 18,
  "username": "Judah",
  "post": "https://randomwordgenerator.com/img/picture-generator/57e7d74b4a52ae14f1dc8460962e33791c3ad6e04e5074417d2f7dd5964bcd_640.jpg",
  "desc": "Peroneal tendinitis",
  "like": 10,
  "Avatar": "https://randomuser.me/api/portraits/women/79.jpg"
},
{
  "id": 19,
  "username": "Benyamin",
  "post": "https://randomwordgenerator.com/img/picture-generator/55e1d54a4d57ab14f1dc8460962e33791c3ad6e04e50744076297cd49349cc_640.jpg",
  "desc": "Lacerat intrinsic musc/fasc/tend l mid finger at wrs/hnd lv",
  "like": 10,
  "Avatar": "https://randomuser.me/api/portraits/men/74.jpg"
},
{
  "id": 20,
  "username": "Ariadne",
  "post": "https://randomwordgenerator.com/img/picture-generator/5fe8d4404256b10ff3d8992cc12c30771037dbf85254784975267cd49f4e_640.jpg",
  "desc": "Unspecified subluxation of right wrist and hand, subs encntr",
  "like": 62,
  "Avatar": "https://randomwordgenerator.com/img/picture-generator/5fe8d4404256b10ff3d8992cc12c30771037dbf85254784975267cd49f4e_640.jpg"
},
]


const Post = () => {
  return (
    <>
      {data.map((e) => (
      <Container
        height={'auto'}
        maxW={'100%'}
        bgColor={'rgb(250,250,250)'}
        border={'1px'}
        borderColor={'white'}
      >
        <Flex
          direction={'column'}
          w={'480px'}
          h={'auto'}
          bgColor={'white'}
          m={'auto'}
          my={'20px'}
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
                {/* <Image src={e.Avatar} width={100} height={100} /> */}
                <Image src={e.Avatar} alt='avatar' />
              </Box>
              <Text
                fontWeight={"500"}
              >{e.username}</Text>
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
            <Image src={e.post} w={'100%'} />
          </Box>
          <Flex
            direction={'column'}
            h={'140px'}
            w={'100%'}
            // border={'1px'}
            // borderColor={'black'}
          >
            <Flex
              direction={'row'}
              alignItems={"center"}
              w={'100%'}
              h={'45px'}
              px={'12px'}
              pt={'4px'}
              pb={'6px'}
              // border={'1px'}
              // borderColor={'blue'}
            >
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                h={'100%'}
                w={'40px'}
                // border={'1px'}
                // borderColor={'black'}
              >
                <BsHeart cursor={'pointer'} size={30} />
              </Box>
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                h={'100%'}
                w={'40px'}
                // border={'1px'}
                // borderColor={'black'}
                ml={'20px'}
              >
                <FaRegComment cursor={'pointer'} size={30} />
              </Box>
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                h={'100%'}
                w={'40px'}
                // border={'1px'}
                // borderColor={'black'}
                ml={'20px'}
              >
                <FaTelegramPlane cursor={'pointer'} size={30} />
              </Box>
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                h={'100%'}
                w={'40px'}
                // border={'1px'}
                // borderColor={'black'}
                ml={'250px'}
              >
                <BsSave cursor={'pointer'} size={30} />
              </Box>
            </Flex>
            <Flex
              alignItems={"center"}
              w={'100%'}
              h={'18px'}
              px={'12px'}
              pt={'4px'}
              pb={'8px'}
              // border={'1px'}
              // borderColor={'blue'}
            >
              <Text
                ml={'10px'}
                fontWeight={'500'}
              >{e.like}</Text>
            </Flex>
            <Flex
              alignItems={"center"}
              w={'100%'}
              h={'26px'}
              px={'12px'}
              // border={'1px'}
              // borderColor={'blue'}
            >
              <Text
                ml={'10px'}
              >{e.desc}</Text>
            </Flex>
            <Flex
              direction={'row'}
              alignItems={"center"}
              w={'100%'}
              h={'50px'}
              px={'16px'}
              py={'4px'}
              // border={'1px'}
              // borderColor={'blue'}
            >
              <Box
                w={'80%'}
                h={'100%'}
                // border={'1px'}
                // borderColor={'green'}
              >
                <Input placeholder='Add a Comment' type={'text'} />
              </Box>
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                w={'20%'}
                h={'100%'}
                // border={'1px'}
                // borderColor={'green'}
              >
                <Text
                  textAlign={'center'}
                  fontWeight={'500'}
                  color={'#47afff'}
                  cursor={'pointer'}
                >Post</Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Container>
      ))}
    </>
  )
}

export default Post