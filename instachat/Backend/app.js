const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server,{
    cors:{
        origin:"https://example.com",
        methods:["GET","POST"]
    }})
io.on('connection',(socket)=>{
    console.log("r")
    socket.on("roomsatu",function(data){
        console.log(data)
    })
})
server.listen(3000)


