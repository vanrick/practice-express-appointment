exports.up = function(knex, Promise) {

    return knex.schema.createTable('employee', function(table) {
        table.increments('id').primary();
        table.string('first_name', 255);
        table.string('last_name', 255);
        table.string('email', 60);
        table.integer('phone_number');
        table.string('google_token', 255);
        table.integer('security_level', 5);
        table.timestamps();
    });

};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists('employee');

};