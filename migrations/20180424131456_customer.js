exports.up = function(knex, Promise) {

    return knex.schema.createTable('customer', function(table) {
        table.increments('id').primary();
        table.string('first_name', 255);
        table.string('last_name', 255);
        table.bigInteger('phone_number');
        table.string('email', 60);
        table.string('google_token', 255);
        table.timestamps();
    });

};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists('customer');

};