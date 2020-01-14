
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('contexts').insert([
    { name: 'atWork' },
    { name: 'atHome' },
    { name: 'needsLaptop' },
    { name: 'needsCoffee' },
    { name: 'inCar' },
    { name: 'atGym' },
    { name: 'inEmail' }
  ])
};
