
exports.up = async function (knex) {
  // Projects Table
  await knex.schema.createTable('projects', tbl => {
    tbl.increments('id');
    tbl.string('name', 128).notNullable();
    tbl.string('description', 128);
    tbl.boolean('completed').defaultTo(false);
  })
  // Task Table
  await knex.schema.createTable('task', tbl => {
    tbl.increments('id');
    tbl.string('description', 128).notNullable();
    tbl.string('notes');
    tbl.boolean('completed').defaultTo(false);
    tbl
      .integer('project_id')
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })

  // Resource Table
  await knex.schema.createTable('resource', tbl => {
    tbl.increments('id')
    tbl.string('name', 128).notNullable().unique();
    tbl.string('description');
  })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('resource');
  await knex.schema.dropTableIfExists('task');
  await knex.schema.dropTableIfExists('projects');
};
