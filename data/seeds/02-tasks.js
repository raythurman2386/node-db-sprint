
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('task').insert([
    { description: 'Seeds', notes: null, completed: false, project_id: 1 },
    { description: 'run seeds', notes: 'something goes here', completed: false, project_id: 1 },
    { description: 'test endpoints again', notes: 'something goes here', completed: true, project_id: 1 },
    { description: 'something', notes: null, completed: false, project_id: 2 },
    { description: 'who knows', notes: 'something goes here', completed: true, project_id: 2 },
    { description: 'great sprint', notes: 'something goes here', completed: false, project_id: 3 },
    { description: 'so', notes: null, completed: true, project_id: 3 },
    { description: 'much', notes: null, completed: false, project_id: 3 },
    { description: 'fun', notes: null, completed: true, project_id: 4 },
    { description: 'here', notes: 'something goes here', completed: false, project_id: 4 },
    { description: 'indeed', notes: null, completed: false, project_id: 4 },
  ])
};
