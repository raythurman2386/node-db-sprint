const db = require('../../data/db-config');

// Get Projects
function getProjects() {
  return db('projects');
}

// Get Project by ID
function getProjectById(id) {
  return db('projects').where({ id }).first();
}

// Add Project
async function addProject(project) {
  const [id] = await db('projects').insert(project);
  return await getProjectById(id);
}

// Update Project
function updateProject(id, project) {

}

// Delete Project
function deleteProject(id) {
  return db('projects').where({ id }).del();
}

module.export = {
  getProjects,
  getProjectById,
  addProject,
  deleteProject
}