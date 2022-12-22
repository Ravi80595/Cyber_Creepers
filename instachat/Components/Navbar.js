import React from "react";
import Link from 'next/link'
import Image from "next/image";

import {
  chakra, Box,
  Flex, useColorModeValue, VisuallyHidden, HStack,
  Button, useDisclosure, VStack, IconButton,
  CloseButton, InputGroup, InputLeftElement, Input, Avatar, 
  // mobileNav
} from '@chakra-ui/react'

import {
  AiOutlineMenu, AiFillHome, AiOutlineInbox,
  AiOutlineSearch, AiFillBell, AiOutlinePlusSquare
} from "react-icons/ai"
import { BsFillCameraVideoFill } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/Tfi";
import { SlPaperPlane } from "react-icons/sl";


// ..........................................................
const Navbar = () => {

  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();






  return (

    <>




      <React.Fragment>
        <chakra.header
          bg={bg}
          w="full"
          px={{
            base: 2,
            sm: 4,
          }}
          py={4}
          shadow="md"
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <HStack display="flex" spacing={3} alignItems="center">
              <Box
                display={{
                  base: "inline-flex",
                  md: "none",
                }}
              >
                <IconButton
                  display={{
                    base: "flex",
                    md: "none",
                  }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{
                    color: "inherit",
                  }}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />
                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    justifySelf="self-start"
                    onClick={mobileNav.onClose}
                  />
                  <Button
                    w="full" variant="ghost" leftIcon={<AiFillHome />} >
                    <Link legacyBehavior href="/">
                      <a>Home</a>
                    </Link>
                  </Button>
                  <Button
                    w="full" variant="ghost" leftIcon={<MdOutlineExplore />} >
                    <Link legacyBehavior href="/Explore">
                      <a>Explore</a>
                    </Link>
                  </Button>
                  <Button
                    w="full" variant="ghost" leftIcon={<TfiVideoClapper />} >
                    <Link legacyBehavior href="/Reels">
                      <a>Reels</a>
                    </Link>
                  </Button>
                  <Button
                    w="full" variant="ghost" leftIcon={<SlPaperPlane />} >
                    <Link legacyBehavior href="/Messages">
                      <a>Messagse</a>
                    </Link>
                  </Button>
                  <Button
                    w="full" variant="ghost" leftIcon={<AiOutlinePlusSquare />} >
                    <Link legacyBehavior href="/Create">
                      <a>Create</a>
                    </Link>
                  </Button>

                  <Button variant="ghost" leftIcon={<AiFillBell />} size="sm"

                  >
                    <Link legacyBehavior href="/Notification">
                      <a>Notification</a>
                    </Link>
                  </Button>


                </VStack>
              </Box>
              <chakra.a
                href="/"
                title="Choc Home Page"
                display="flex"
                alignItems="center"
              >
                {/*......................................  */}
                <Image src='/logo.jpg' alt="logo" width={60} height={60}/>
            
                <VisuallyHidden>Choc</VisuallyHidden>
              </chakra.a>

              <HStack
                spacing={3}
                display={{
                  base: "none",
                  md: "inline-flex",
                }}
              >

                <Button variant="ghost" leftIcon={<AiFillHome />} size="sm">
                  <Link legacyBehavior href="/">
                    <a>Home</a>
                  </Link>
                </Button>

                <Button variant="ghost" leftIcon={<MdOutlineExplore />} size="sm">
                  <Link legacyBehavior href="/Explore">
                    <a>Explore</a>
                  </Link>
                </Button>

                <Button variant="ghost" leftIcon={<TfiVideoClapper />} size="sm">
                  <Link legacyBehavior href="/Reels">
                    <a>Reels</a>
                  </Link>
                </Button>


                <Button variant="ghost" leftIcon={<SlPaperPlane />} size="sm">
                  <Link legacyBehavior href="/Messages">
                    <a>Messages</a>
                  </Link>
                </Button>

                <Button variant="ghost" leftIcon={<AiOutlinePlusSquare />} size="sm">
                  <Link legacyBehavior href="/Create">
                    <a>Create</a>
                  </Link>
                </Button>






              </HStack>
            </HStack>

            <HStack
              spacing={3}
              display={mobileNav.isOpen ? "none" : "flex"}
              alignItems="center"
            >
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <AiOutlineSearch />
                </InputLeftElement>
                <Input type="tel" placeholder="Search..." />
              </InputGroup>

              <chakra.a
                p={3}
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                rounded="sm"
                _hover={{
                  color: "gray.800",
                  _dark: {
                    color: "gray.600",
                  },
                }}
              >
                <AiFillBell />
                <VisuallyHidden>Notifications</VisuallyHidden>

              </chakra.a>

              <Avatar
                size="sm"
                name=""
                src=""
              />
            </HStack>
          </Flex>
        </chakra.header>
      </React.Fragment>


    </>



  )
}

export default Navbar
