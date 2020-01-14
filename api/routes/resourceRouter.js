const resourceRouter = require('express').Router();
const db = require('../../data/models/resource.models');

resourceRouter
  // retrieve resources
  .get('/', async (req, res, next) => {
    try {
      const resources = await db.getResources();
      return res.status(200).json(resources);
    } catch (error) {
      next(error)
    }
  })

  // add resource
  .post('/', async (req, res, next) => {
    try {
      const newResource = await db.addResource(req.body);
      return res.status(200).json(newResource);
    } catch (error) {
      next(error)
    }
  })

module.exports = resourceRouter;