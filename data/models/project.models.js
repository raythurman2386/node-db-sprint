const db = require('../db-config');

// Get Projects
async function getProjects() {
  const projects = await db('projects');
  const fixCompletes = projects.map(project => ({ ...project, completed: project.completed ? true : false }))
  return fixCompletes;
}

// Get Project by ID
async function getProjectById(id) {
  const project = await db('projects').where({ id }).first();
  const tasks = await db('task').where({ project_id: id });
  return {
    ...project,
    completed: project.completed ? true : false,
    tasks: tasks.map(task => ({ ...task, completed: task.completed ? true : false }))
  }
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
  addProject,
  deleteProject
}