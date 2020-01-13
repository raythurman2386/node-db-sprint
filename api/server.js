const express = require('express');
const middleware = require('./middleware');
const projectRouter = require('./routes/projectRouter');
const resourceRouter = require('./routes/resourceRouter');
const taskRouter = require('./routes/taskRouter');

const server = express();
server.use(express.json());

middleware(server);

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.use((req, res, next) => {
  return res.status(400).json({ message: 'That route does not exist' })
})

server.use((err, req, res, next) => {
  return res.status(500).json({ message: 'There has been a major malfunction' })
})

module.exports = server;