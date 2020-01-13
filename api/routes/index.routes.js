const projectRouter = require('./projectRouter');
const resourceRouter = require('./resourceRouter');
const taskRouter = require('./taskRouter');

module.exports = server => {
  server.use('/api/projects', projectRouter);
  server.use('/api/resources', resourceRouter);
  server.use('/api/tasks', taskRouter);
}