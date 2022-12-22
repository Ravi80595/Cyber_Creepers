import React from 'react'
import {Box,Flex,Text,Button,Table,Thead,Tbody,Tr,Td,Image,Th,Spinner} from '@chakra-ui/react'
import { useEffect,useState } from 'react'
import axios from 'axios'


const AllAdmin = () => {
  const [admins,setAdmins] = useState([])
  const [loading,setLoading]= useState(false)
  console.log(admins)


  const getData=()=>{
    setLoading(true)
    axios.get(`http://localhost:3000/api/Admin/adminLogin`)
    .then((res)=>{
      // console.log(res.data)
      setAdmins(res.data.data)
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
    <Flex mb="30px" justifyContent="space-between" direction={['column','column','row']} alignItems="center" > 
        <Text fontWeight='bold' pb={5}>All Admins:</Text>
        {/* <Link to='/adminsign'> */}
        <Button bg="white" border="1px solid grey">+ Add Admin</Button>
        {/* </Link> */}
        </Flex>
    <Table>
            <Thead>
              <Tr>
                <Th>Image</Th>
                <Th>Name</Th>
                <Th className="productRow">Role</Th>
                <Th className="productRow">Contacts</Th>
                <Th className='productRow2'>Remove</Th>
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
              {admins && admins.map((ele)=>{
                return(
                  <>
                  <Tr key={ele._id} className="userRow">
                    <Td>
                      <Image src={ele.avtar} w={20}/>
                    </Td>
                      <Td>
                      <Text fontSize={20}>{ele.firstname} {ele.lastname}</Text>
                      </Td>
                      <Td>
                      <Text fontSize={20} className="productRow">{ele.role}</Text>
                      </Td>
                      <Td>
                      <Text fontSize={20} className="productRow">{ele.email}</Text>
                      </Td>
                      <Td className='productRow2'>
                      <Button >Block {ele.firstname}</Button>
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

export default AllAdmin
