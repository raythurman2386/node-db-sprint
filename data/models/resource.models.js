const db = require('../../data/db-config');

// Get Resource
function getResources() {
  return db('resource');
}

// Add Resource
function addResource(resource) {
  return db('resource').insert(resource);
}

// Delete Resource
function deleteResource(id) {
  return db('resource').where({ id }).del();
}

module.exports = {
  getResources,
  addResource,
  deleteResource
}