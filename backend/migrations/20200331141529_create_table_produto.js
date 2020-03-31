
exports.up = function (knex) {
    return knex.schema.createTable('produtos', table => {
        table.increments('id').primary()
        table.string('nome').notNull()
        table.string('valor').notNull()
        table.string('file')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users')
};
