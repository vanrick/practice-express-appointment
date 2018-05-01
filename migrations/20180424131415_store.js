exports.up = function(knex, Promise) {

    return knex.schema.createTable('store', function(table) {
        table.increments('id').primary();
        table.string('store_name');
        table.string('store_street');
        table.string('store_city');
        table.integer('store_zip');
        table.string('store_country');
        table.bigInteger('store_phone_number');
        table.string('sunday_store_hours');
        table.string('monday_store_hours');
        table.string('tuesday_store_hours');
        table.string('wednesday_store_hours');
        table.string('thursday_store_hours');
        table.string('friday_store_hours');
        table.string('saturday_store_hours');
        table.timestamps();
    });

};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists('store');

};