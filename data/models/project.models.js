const db = require('../db-config');

// Get Projects
function getProjects() {
  return db('projects');
}

// Get Project by ID
function getProjectById(id) {
  return db('projects as P').where({ id }).first();
}


function getProjectTasks(project_id) {
  return db('task as T')
    .join('projects as P', { 'T.project_id': 'P.id' })
    .where({ project_id: project_id })
    .select('P.name', 'P.description', 'T.description', 'T.completed');
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

module.exports = {
  getProjects,
  getProjectById,
  getProjectTasks,
  addProject,
  deleteProject
}