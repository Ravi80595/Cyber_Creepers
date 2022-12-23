import React, { useState } from 'react'
import "../../styles/Dashboard.module.css"
import {Box,Text,Flex,Button,Image} from "@chakra-ui/react"
import AllAdmin from './AllAdmin'
import AllUsers from './AllUsers'
import styles from "../../styles/Dashboard.module.css"
import {RiAdminFill} from "react-icons/ri"
import {AiOutlineTeam} from "react-icons/ai"
import {FaUserAlt,FaRupeeSign} from "react-icons/fa"
import {BsTagsFill } from "react-icons/bs"
import {CiDiscount1} from "react-icons/ci" 
import AdvertisementTeam from './AdvertisementTeam'
import Partners from './Partners'
import { useEffect } from 'react'


const adminProfiles={
    "firstname":"Ravi",
    "avtar":"https://avatars.githubusercontent.com/u/63177572?v=4",
    "role":"Founder"

}

const Dashboard = () => {
  const [show,setShow]=useState("")
  const [adminProfile,setAdminProfile]=useState([adminProfiles])

console.log(adminProfile)



  return (
    <Flex w='100%'>

                       {/*  Profile Section */}
      <Box className={styles.lhsBox} w={["5%","10%","16%"]} h='100vh' p={["0px","0px",'20px']}>
        {/* <Link to="/adminprofile"> */}
          {
            adminProfile && adminProfile.map((data)=>{
              return(
                <Flex id='titleBox' p='0px 10px' mb='40px' key={data._id}>
                <Image src={data.avtar} w='45px' borderRadius='50%' className='productRow2'/>
                <Box ml={["0px","-12px","0px"]}>
                <Text pl={[0,0,5]} fontWeight='bold'>{data.firstname}</Text>
                <Text pl={[0,0,5]} >{data.role}</Text>
                </Box>
                </Flex>
              )
            })
          }
          {/* </Link> */}
                               {/* Side Bar */}

        <Box className={styles.linkBox}>
          <Flex id='usersBox' p='7px 17px' className={styles.linkItem} onClick={()=>setShow("AllAdmin")}>
          <RiAdminFill/>
          <Text pl={["0px","5px",'15px']} className={styles.linkItem}>Admins</Text>
          </Flex>
          <Flex id='usersBox' p='7px 17px' className={styles.linkItem} onClick={()=>setShow("Users")}>
          <FaUserAlt/>
          <Text pl={["0px","5px",'15px']} className={styles.lhsName}>Users</Text>
          </Flex>
          <hr />
          {/* <Flex id='usersBox' p='7px 17px' className={styles.linkItem} onClick={()=>setShow(2)}>
          <BsTagsFill />  
          <Text pl={["0px","5px",'15px']} className={styles.lhsName}>Products</Text>
          </Flex>
          <Flex id='usersBox' p='7px 17px' className={styles.linkItem} onClick={()=>setShow(3)}>
          <FaRupeeSign/>  
          <Text pl={["0px","5px",'15px']} className={styles.lhsName}>Orders</Text>
          </Flex> */}
          <Flex id='usersBox' p='7px 17px' className={styles.linkItem} onClick={()=>setShow('Discounts')}>
          <CiDiscount1/>
          <Text pl={["0px","5px",'15px']} className={styles.lhsName}>Partners</Text>
          </Flex>
          <hr />
          <Flex id='usersBox' p='7px 17px' className={styles.linkItem} onClick={()=>setShow("SalesTeams")}>
          <AiOutlineTeam/>
          <Text pl={["0px","5px",'15px']} className={styles.lhsName}>Advertisment Team</Text>
          </Flex>
        </Box>
      </Box>


          {/*     Right hand Side From Here    */}

      <Box className={styles.rhsBox} w='84%' ml='16%' h='auto'> 
        <Box className={styles.navbarBox}  p='0px 40px'>
          <Flex justifyContent='space-between' pt={3} mb={3}>
            <Text fontWeight='bold'>Instachat Admin Panel</Text>
            <Button _hover={{bg:"rgb(134, 130, 238)",color:"white"}} mb={2} >Log Out</Button>
          </Flex>
        </Box>
      <Box className={styles.rhsBody} m='30px' p='30px'>

        {
          show==="Users"?<AllUsers/>:show==2?<ProductPage/>:show==3?<OrdersPage/>:show=="AllAdmin"?<AllAdmin/>:show=="SalesTeams"?<AdvertisementTeam/>:show=="Discounts"?<Partners/>:<h1>r</h1>
        }
        
      </Box>
      </Box>
    </Flex>
  )
}

export default Dashboard
