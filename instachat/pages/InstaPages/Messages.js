import React, { useState } from 'react'
import {io} from 'socket.io-client'


const socket = io("http://localhost:3000",{transports:['websocket']})
const Messages = () => {
  const [nama,setNama]= useState("")
  const handlepost=(e)=>{
    socket.emit("roomsatu",{post:nama})
  }
  return (
    <div>
      <h1>All Messages are heres</h1>
    <br/>
    <input type="text" style={{border:'2px solid black'}} placeholder='r' onChange={(e)=>setNama(e.target.value)}/>
    <button onClick={handlepost} style={{border:'2px solid black'}}>send</button>
    </div>
  )
}

export default Messages
