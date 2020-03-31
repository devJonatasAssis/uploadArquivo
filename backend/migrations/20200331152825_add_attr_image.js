
exports.up = function(knex) {
  return knex.schema.table('produtos', table => {
      table.integer('size_image')
      table.string('key_image')
      table.string('url_image')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('produtos');
};
