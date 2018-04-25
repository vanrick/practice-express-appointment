exports.up = function(knex, Promise) {

    return knex.schema.createTable('store', function(table) {
        table.increments('id').primary();
        table.string('store_name');
        table.integer('store_street');
        table.string('store_city');
        table.integer('store_zip');
        table.string('store_country');
        table.integer('store_phone_number');
        table.integer('store_hours');
        table.timestamps();
    });

};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists('store');

};