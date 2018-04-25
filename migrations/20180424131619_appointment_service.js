exports.up = function(knex, Promise) {

    return knex.schema.createTable('appointment_service', function(table) {
        table.increments('id').primary();
        table.integer('service_id').references('id').inTable('services').notNull().onDelete('cascade');
        table.integer('appointment_id').references('id').inTable('appointment').notNull().onDelete('cascade');
        table.timestamps();
    });

};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists('appointment_service');

};