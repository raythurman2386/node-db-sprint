
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('resource').insert([
    { name: 'Hammer', description: 'go caveman' },
    { name: 'Computer', description: 'code stuff' },
    { name: 'Car', description: 'drive somewhere' },
    { name: 'keyboard', description: 'typy typy' },
    { name: 'Baby Yoda', description: 'da boss' },
    { name: 'Baby Jarjar', description: 'DO ITT!!!' },
  ])
};
