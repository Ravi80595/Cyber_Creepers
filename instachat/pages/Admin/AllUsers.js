import axios from 'axios'
import {AiFillDelete} from 'react-icons/ai'
import React, { useState,useEffect } from 'react'
import { Flex,Button,Text,Table, Th, Thead, Tr,Tbody,Td,Image,Box,Spinner} from '@chakra-ui/react'

const AllUsers = () => {
  const [users,setUsers]=useState([])
  const [loading,setLoading]=useState(false)

  //.................... All Users Fetch Method .....................//

  const getData=()=>{
    setLoading(true)
    axios.get(`http://localhost:3000/api/User/Usersign`)
    .then((res)=>{
      console.log(res.data)
      setUsers(res.data.data)
      setLoading(false)
    })
    .catch(function (err){
      console.log(err)
      setLoading(false)
    })
  }

  useEffect(()=>{
    getData()
  },[])



  return (
    <Box>
      <Flex mb="30px" direction={['column','column','row']}  justifyContent="space-between" alignItems="center" > 
          <Text fontWeight='bold' pb={5}>All Users :</Text>
          <Button bg="white" border="1px solid grey">+ Add User</Button>
          </Flex>
      <Table>
              <Thead>
                <Tr>
                  <Th>Image</Th>
                  <Th>Name</Th>
                  <Th className='productRow'>Email</Th>
                  <Th className='productRow'>Gender</Th>
                  <Th>Remove</Th>
                </Tr>
              </Thead>
              <Tbody id="product_tbody">

{/* .........................  Loading Bar ..................... */}

{loading&&<Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                    ml={200}
                    mt={50}
                  />}

                {/* <!-- items row comes here --> */}

                {users && users.map((ele)=>{
                  return(
                    <>
                    <Tr key={ele._id} className="userRow">
                      <Td>
                        <Image src={ele.avtar} w={20}/>
                      </Td>
                        <Td>
                        <Text fontSize={20}>{ele.firstname}</Text>
                        </Td>
                        <Td>
                        <Text className='productRow' fontSize={20}>{ele.email}</Text>
                        </Td>
                        <Td className='productRow'>
                          <Text>Male</Text>
                        </Td>
                        <Td>
                            <AiFillDelete  w="25px" h="25px" _hover={{color:"red",cursor:"pointer"}} />
                        </Td>
                    </Tr>
                    </>
                  )
                })
                }
              </Tbody>
            </Table>
    </Box>  
  )
}

export default AllUsers
