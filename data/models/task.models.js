const db = require('../../data/db-config');

// Get Task
function getTask() {
  return db('task');
}

// Add Task
function addTask(task) {
  return db('task').insert(task);
}

// Delete Task
function deleteTask(id) {
  return db('task').where({ id }).del();
}

module.exports = {
  getTask,
  addTask,
  deleteTask
}