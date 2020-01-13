const express = require('express');
const middleware = require('./middleware');
const router = require('./routes/index.routes');

const server = express();

middleware(server);
router(server);

server.use((req, res, next) => {
  return res.status(400).json({ message: "This is not the correct route!!!!" })
});

server.use((err, req, res, next) => {
  return res.json({ message: 'Something has went very, very wrong.' })
})

module.exports = server;