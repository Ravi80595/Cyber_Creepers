import React from 'react'
import { useState } from "react"
import { Grid, GridItem, Container, Box, Text, Button, Image } from '@chakra-ui/react'



let arr = [

    {
        id:1,
        image: "https://cdn-icons-png.flaticon.com/128/4140/4140048.png",
        userName: "Avi65",
        name: "Avilash Keshri",
        follow: true

    },
    {
        id:2,
        image: "https://cdn-icons-png.flaticon.com/512/9226/9226703.png",
        userName: "Ankit89",
        name: "Ankit Tyagi",
        follow: false

    },
    {
        id:3,
        image: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
        userName: "April",
        name: "Luice April",
        follow: false

    },
    {
        id:4,
        image: "https://cdn-icons-png.flaticon.com/128/2922/2922561.png",
        userName: "Runi63",
        name: "Ronak Tyagi",
        follow: true

    },
    {
    
        id:5,
        image: "https://cdn-icons-png.flaticon.com/512/9226/9226703.png",
        userName: "Ojak51",
        name: "Adam Luise",
        follow: false

    },
    {
        id:6,
        image: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
        userName: "monk",
        name: "Manish yadav ",
        follow: false

    }
]

const Followers = () => {



    const [foll, setFoll] = useState("Follow")

    const handleClick = () => {
     
    }

    return (
        <div>
            <Box w={"70%"} m={"auto"} mt={"70px"} >

                {arr.map((el) => (


                    <Box key={el.id} mt={"20px"}>
                        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                            {/* <GridItem w='70%' h='10' bg='blue.300' />
                        <GridItem w='70%' h='10' bg='blue.300' /> */}

                            <Box >




                                <Box display="flex">
                                    <Image src={el.image} alt="img" w="40px" display="inline" />
                                    <Box ml="10px"><Text>{el.userName}</Text> </Box>
                                </Box>
                                <Text ml="49px" mt={"-20px"}>{el.name}</Text>
                            </Box>
                            <Button
                             onClick={handleClick}

                            color="white" bg="#0095F6" w="30%">{foll}</Button>















                        </Grid>

                    </Box>
                ))}
            </Box>
        </div>
    )
}

export default Followers