const express = require("express");

const server = express();


//routes
require('./app/routes')(server);


server.listen(3000);
