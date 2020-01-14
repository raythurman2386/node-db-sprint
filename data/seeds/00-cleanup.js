
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('project_resources').truncate();
  await knex('resource').truncate();
  await knex('task').truncate();
  await knex('projects').truncate();
};
