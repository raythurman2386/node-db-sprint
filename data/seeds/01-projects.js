
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('projects').insert([
    { name: 'DB Sprint', description: 'sprint on databases', completed: false },
    { name: 'test 1', description: 'sprint on databases', completed: false },
    { name: 'test 2', description: 'sprint on databases', completed: false },
    { name: 'test 3', description: 'sprint on databases', completed: true }
  ])
};
