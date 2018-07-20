
exports.up = function (knex, Promise) {
    return knex.schema.createTable('item', table => {
        table.increments();
        table.string('item_name');
        table.text('item_description');
        table.integer('item_price');
        table.boolean('price_negotiable')
            .defaultTo('false');
        table.text('img_url')
        table.string('duration')
            .defaultTo('Day')
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('user')
            .onDelete('CASCADE')
            .index();
        table.timestamps(true, true);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('item');
};
