exports.up = function(knex, Promise) {

    return knex.schema.createTable('services', function(table) {
        table.increments('id').primary();
        table.string('service_name', 65);
        table.string('service_description', 255);
        table.integer('service_duration', 11);
        table.timestamps();
    });

};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists('services');

};