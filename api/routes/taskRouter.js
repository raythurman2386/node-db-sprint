const taskRouter = require('express').Router();
const db = require('../../data/models/task.models');

taskRouter
  // retrieve tasks
  .get('/', async (req, res, next) => {
    try {
      const tasks = await db.getTask();

      const fixCompletes = tasks.map(task => task.completed ? { ...task, completed: true } : { ...task, completed: false });

      return res.status(200).json(fixCompletes);
    } catch (error) {
      next(error)
    }
  })

  // add task
  .post('/', async (req, res, next) => {
    try {
      const newTask = await db.addTask(req.body);
      return res.status(200).json(newTask);
    } catch (error) {
      next(error)
    }
  })

module.exports = taskRouter;