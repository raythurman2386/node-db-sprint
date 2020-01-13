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

module.exports = server;