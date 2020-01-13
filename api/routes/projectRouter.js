const projectRouter = require('express').Router();
const db = require('../../data/models/project.models');

projectRouter
  // retrieve projects
  .get('/', async (req, res, next) => {
    try {
      const projects = await db.getProjects();

      const fixCompletes = projects.map(project => project.completed ? { ...project, completed: true } : { ...project, completed: false });

      return res.status(200).json(fixCompletes);
    } catch (error) {
      next(error)
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const project = await db.getProjectTasks(req.params.id);
      return res.status(200).json(project);
    } catch (error) {
      next(error);
    }
  })

  // add project
  .post('/', async (req, res, next) => {
    try {
      const newProject = await db.addProject(req.body);
      return res.status(200).json(newProject);
    } catch (error) {
      next(error)
    }
  })

module.exports = projectRouter;