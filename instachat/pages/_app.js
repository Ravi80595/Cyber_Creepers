import '../styles/globals.css'
import Navbar from '../Components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import AdminSign from '../Components/AdminSign'
import AdminLogin from '../Components/AdminLogin'
import Home from './Home'
import Post from './Post'
// import Dashboard from "./Admin/Dashboard"

export default function App({ Component, pageProps }) {
  return <>
  <ChakraProvider>
    <Navbar/>
    {/* <AdminSign/> */}
    {/* <AdminLogin/> */}
    {/* <Dashboard/> */}
    {/* <Home /> */}
    <Post />
    {/* <Component {...pageProps} /> */}
   </ChakraProvider>
  </>
}
