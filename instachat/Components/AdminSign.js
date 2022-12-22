import React from 'react'
import { Box,FormControl, FormLabel,FormErrorMessage,Input,Button, } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'


const AdminSign = () => {
    const [firstname,setFirstName]=useState("")
    const [lastname,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [password, setPassword] = useState('')
    const [error,setError]= useState(false)

    const handleSubmit = ()=>{
        const payload={
            firstname,
            email,
            lastname,
            password
          }
          console.log(payload)
      axios.post(`http://localhost:3000/api/Admin/admin`,payload)
      .then((res)=>{
        console.log(res.data)
        // alert(res.data.msg)
      })
      .catch(function (err){
        // alert(err.response.data.msg)
        console.log(err)
        setError(true)
      })
    }

  return (
    <Box w='30%' m='auto' boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' p='5' mt='100px'>
    <Box textAlign='center' fontWeight="bold" fontSize="22px">Admin </Box>
    <FormControl>
    <FormLabel>First Name*</FormLabel>
      <Input type="text" placeholder='First Name' value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
      <FormLabel>Last Name</FormLabel>
      <Input type="text" placeholder='Last Name' value={lastname} onChange={(e)=>setLastName(e.target.value)}/>
      <FormLabel>Email*</FormLabel>
      <Input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      {
        error?<FormErrorMessage>Email is required.</FormErrorMessage>:""
      }
      <FormLabel>Password*</FormLabel>
      <Input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <Button mt="15px" onClick={handleSubmit} mb={5} _hover={{ bg: "rgb(65, 63, 63)" }} w="100%" color="white"  bg="black">Sign Up</Button>
      {/* <Link to="/adminlogin"> */}
      <Button w='100%'  _hover={{ bg: "rgb(65, 63, 63)",color:'white' }} m='auto'> Already have an Account Login</Button>
      {/* </Link> */}
    </FormControl>
  

   </Box>
  )
}

export default AdminSign
