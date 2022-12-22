import React from "react";
import { Box, filter } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel , Avatar,Text,Button } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { IoIosSettings } from 'react-icons/io';

const Profile = () => {
  return (
    <div>
      <Box display={'flex'} justifyContent='space-between' margin='auto' height={'300px'} w ='50%'>
      <Box w='35%'>
        <Avatar marginTop='20%' size='4xl'  src='https://bit.ly/dan-abramov'/>
      </Box>
      <Box w='55%' >

        <Box ml='-6'  mb='14px' justifyContent='space-evenly' display='flex'>
          <Text fontSize='30px'>noida.ims</Text>
          <Button>Edit profile</Button>
          <IoIosSettings size='30px'/>
        </Box>

        <Box ml='-6' textAlign='start' mb='20px' justifyContent='space-evenly' display='flex'>
          <Text as = 'b'>12 posts</Text>
          <Text as = 'b'>58 followers</Text>
          <Text as = 'b'>23 following</Text>
        </Box>
        
      <Box>
        <Text as= 'b' >Ims noida</Text>
        <Text >Welcom IMS Family</Text>
        <Text >Proud To Be IMSIAN'S</Text>
        <Text >Love Coding Only</Text>
      </Box>

      </Box>
      </Box>
      {/* Tabs */}
      <Box ml='20%' mr='20%'>
        <Tabs>
          <TabList justifyContent="center">
            <Tab color="grey" fontSize="sm" fontWeight="semibold">
              POST
            </Tab>
            <Tab color="grey" fontSize="sm" fontWeight="semibold">
              REELS
            </Tab>
            <Tab color="grey" fontSize="sm" fontWeight="semibold">
              SAVED
            </Tab>
            <Tab color="grey" fontSize="sm" fontWeight="semibold">
              TAGGED
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel display={"flex"} gap="5">
              <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <GridItem>
                  <Box _hover={{ WebkitFilter : 'blur(1px)', filter : 'blur(1px)'}} h="220px" w="250px" bg="red" bgImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ax_1wf5TWJFuV2euzVP2SlwMXjHUEzS0fU0zL_FniEVbDFcHKUXEeAE-uLRv7LLhV6A&usqp=CAU' ></Box>
                </GridItem>
                <GridItem>
                  <Box _hover={{ WebkitFilter : 'blur(1px)', filter : 'blur(1px)'}} h="220px" w="250px" bg="red" bgImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ax_1wf5TWJFuV2euzVP2SlwMXjHUEzS0fU0zL_FniEVbDFcHKUXEeAE-uLRv7LLhV6A&usqp=CAU' ></Box>
                </GridItem>
                <GridItem>
                  <Box _hover={{ WebkitFilter : 'blur(1px)', filter : 'blur(1px)'}} h="220px" w="250px" bg="red" bgImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ax_1wf5TWJFuV2euzVP2SlwMXjHUEzS0fU0zL_FniEVbDFcHKUXEeAE-uLRv7LLhV6A&usqp=CAU' ></Box>
                </GridItem>
                <GridItem>
                  <Box _hover={{ WebkitFilter : 'blur(1px)', filter : 'blur(1px)'}} h="220px" w="250px" bg="red" bgImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ax_1wf5TWJFuV2euzVP2SlwMXjHUEzS0fU0zL_FniEVbDFcHKUXEeAE-uLRv7LLhV6A&usqp=CAU' ></Box>
                </GridItem>
              </Grid>
            </TabPanel>
            <TabPanel display={"flex"} gap="5">
              <p>REELS</p>
            </TabPanel>
            <TabPanel display={"flex"} gap="5">
              <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <GridItem>
                  <Box _hover={{ WebkitFilter : 'blur(1px)', filter : 'blur(1px)'}} h="220px" w="250px" bg="red" bgImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ax_1wf5TWJFuV2euzVP2SlwMXjHUEzS0fU0zL_FniEVbDFcHKUXEeAE-uLRv7LLhV6A&usqp=CAU' ></Box>
                </GridItem>
                <GridItem>
                  <Box _hover={{ WebkitFilter : 'blur(1px)', filter : 'blur(1px)'}} h="220px" w="250px" bg="red" bgImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ax_1wf5TWJFuV2euzVP2SlwMXjHUEzS0fU0zL_FniEVbDFcHKUXEeAE-uLRv7LLhV6A&usqp=CAU' ></Box>
                </GridItem>
                <GridItem>
                  <Box _hover={{ WebkitFilter : 'blur(1px)', filter : 'blur(1px)'}} h="220px" w="250px" bg="red" bgImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ax_1wf5TWJFuV2euzVP2SlwMXjHUEzS0fU0zL_FniEVbDFcHKUXEeAE-uLRv7LLhV6A&usqp=CAU' ></Box>
                </GridItem>
                <GridItem>
                  <Box _hover={{ WebkitFilter : 'blur(1px)', filter : 'blur(1px)'}} h="220px" w="250px" bg="red" bgImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbkZHs3GtsP3Ahj_BC_r9Ts9XJLvq4q2Xkoy27Rf8_WyGWscC3-Xfh9Eiw66mWdHCl3IQ&usqp=CAU' ></Box>
                </GridItem>
              </Grid>
            </TabPanel>
            <TabPanel display={"flex"} gap="5">
              <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <GridItem>
                  <Box _hover={{ WebkitFilter : 'blur(1px)', filter : 'blur(1px)'}} h="220px" w="250px" bg="red" bgImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ax_1wf5TWJFuV2euzVP2SlwMXjHUEzS0fU0zL_FniEVbDFcHKUXEeAE-uLRv7LLhV6A&usqp=CAU' ></Box>
                </GridItem>
                <GridItem>
                  <Box _hover={{ WebkitFilter : 'blur(1px)', filter : 'blur(1px)'}} h="220px" w="250px" bg="red" bgImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR63vdLmKQBiRipxH2r9l_C2e3anPxBL2LLedbvgZIjVGX33rMF7pKu3g3yYSOJyAC_A-o&usqp=CAU' ></Box>
                </GridItem>
              </Grid>
            </TabPanel>
           
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
};

export default Profile