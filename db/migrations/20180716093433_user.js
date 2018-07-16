
exports.up = function (knex, Promise) {
    return knex.schema.createTable('user', table => {
        table.increments();
        table.string('user_name');
        table.string('email').unique();
        table.integer('zip_code');
        // table.string('password').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('user');
};
