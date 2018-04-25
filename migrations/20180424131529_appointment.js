exports.up = function(knex, Promise) {

    return knex.schema.createTable('appointment', function(table) {
        table.increments('id').primary();
        table.integer('customer_id').references('id').inTable('customer').notNull().onDelete('cascade');
        table.integer('employee_id').references('id').inTable('employee').notNull().onDelete('cascade');
        table.integer('store_id').references('id').inTable('store').notNull().onDelete('cascade');
        table.timestamps();
    });

};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists('appointment');

};