const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// TODO Routers

const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());

server.use((req, res, next) => {
  return res.status(400).json({ message: "This is not the correct route!!!!" })
});

server.use((err, req, res, next) => {
  return res.json({ message: 'Something has went very, very wrong.' })
})

module.exports = server;