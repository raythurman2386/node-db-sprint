
exports.up = async function (knex) {
  await knex.schema.createTable('contexts', tbl => {
    tbl.increments('id');
    tbl.string('name', 128).notNullable();
  })
  await knex.schema.createTable('task_contexts', tbl => {
    tbl
      .integer('task_id')
      .notNullable()
      .references('id')
      .inTable('task')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    tbl
      .integer('context_id')
      .notNullable()
      .references('id')
      .inTable('contexts')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    tbl.primary(['task_id', 'context_id']);
  })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('task_contexts');
  await knex.schema.dropTableIfExists('contexts');
};
