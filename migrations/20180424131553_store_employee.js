exports.up = function(knex, Promise) {

    return knex.schema.createTable('store_employee', function(table) {
        table.increments('id').primary();
        table.integer('store_id').references('id').inTable('store').notNull().onDelete('cascade');
        table.integer('employee_id').references('id').inTable('employee').notNull().onDelete('cascade');
        table.timestamps();
    });

};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists('store_employee');

};