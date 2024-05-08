//initialize your server
const express = require('express');

const server= express();

server.use(express.json());
//remember express by default cannot parse JSON() in request bodies

//global middlewares and users router need to be connected here


server.get('/', (req, res)=>{
    res.send(`<h2> Time to use your server </h2>`);
})

module.exports = server;