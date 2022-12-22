import React from 'react'
import {  FormControl,FormLabel,FormErrorMessage,Input,Box,Button,} from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'



const AdminLogin = () => {
    const [email,setEmail]=useState("")
    const [password, setPassword] = useState('')
    const [error,setError]= useState(false)

    const handleSubmit=()=>{
        const payload={
            email,
            password
        }
    axios.post(`http://localhost:3000/api/Admin/adminLogin`,payload)
    .then((res)=>{
        console.log(res.data.tokens)
        alert("Login Success")
        localStorage.setItem("admintoken",res.data.tokens)
        // navigate("/dashboard")
    })
    .catch(function (err){
        setError(true)
        console.log(err)
      })
    }



  return (
    <Box w='30%' m='auto' boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' p='5' mt='100px'>
    <Box textAlign='center' fontWeight="bold" fontSize="22px">Admin </Box>
    <FormControl>
      <FormLabel>Email*</FormLabel>
      <Input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      {
        error?<FormErrorMessage>Email is required.</FormErrorMessage>:""
      }
      <FormLabel>Password*</FormLabel>
      <Input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <Button mt="15px" onClick={handleSubmit} mb={5} _hover={{ bg: "rgb(65, 63, 63)" }} w="100%" color="white"  bg="black">Login</Button>
      {/* <Link to="/adminsign"> */}
      <Button w='100%' _hover={{ bg: "rgb(65, 63, 63)",color:'white' }} m='auto'> Don't have an Account SignUp</Button>
      {/* </Link> */}
    </FormControl>
  

   </Box>
  )
}

export default AdminLogin
