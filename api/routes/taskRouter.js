const taskRouter = require('express').Router();
const db = require('../../data/models/task.models');

taskRouter
  // retrieve tasks
  .get('/', async (req, res, next) => {
    try {
      const tasks = await db.getTasks();
      return res.status(200).json(tasks);
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