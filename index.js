const express= require('express');
const http = require('http');
const cors = require('cors');
const {Server}=require('socket.io');
const route= require('./route')




const app = express();
app.use(cors({origin:"*"}))
app.use(route)

const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
})


server.listen(5000,()=>{
    console.log("server runing");
})