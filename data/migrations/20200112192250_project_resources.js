
exports.up = async function (knex) {
  await knex.schema.createTable('project_resources', tbl => {
    tbl
      .integer('project_id')
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('resource_id')
      .references('id')
      .inTable('resource')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.primary(['project_id', 'resource_id']);
  })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('project_resources');
};
