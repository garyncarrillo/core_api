const express = require("express");

const server = express();


//routes
server.get('/', (req, res) =>{
  res.send('Hello world');
});


server.listen(3000);
