var knex = require('../db/knex');

module.exports = {
    create: function(employee) {
        return knex.raw(`INSERT into employee
    VALUES (default, '${employee.first_name}','${employee.last_name}','${employee.email}','${employee.phone_number}','${employee.google_token}','${employee.security_level}')`)
    },
    all: function() {
        return knex.raw('SELECT * from employee')
    },
    find: function(id) {
        return knex.raw(`SELECT * from employee WHERE id=${id}`)
    },
    destroyEmployee: function(id) {
        return knex.raw(`DELETE from employee WHERE id=${id}`)
    },
    updateOne: function(id, employee) {
        return knex.raw(`UPDATE employee SET first_name='${employee.first_name}',last_name='${employee.last_name}',phone_number='${employee.phone_number}', security_level='${employee.security_level}' WHERE id = ${id}`)
    }
}