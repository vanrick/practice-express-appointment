var knex = require('../db/knex');

module.exports = {
    create: function(appointment) {
        return knex.raw(`INSERT into appointment
    VALUES (default, '${appointment.customer_id}','${appointment.employee_id}','${appointment.store_id}')`)
    },
    all: function() {
        return knex.raw('SELECT * from appointment')
    },
    find: function(id) {
        return knex.raw(`SELECT * from appointment WHERE id=${id}`)
    },
    destroyEmployee: function(id) {
        return knex.raw(`DELETE from appointment WHERE id=${id}`)
    },
    updateOne: function(id, appointment) {
        return knex.raw(`UPDATE appointment SET first name='${appointment.first_name}',last name='${appointment.last_name}',phone number='${appointment.phone_number}', security level='${appointment.security_level}' WHERE id = ${id}`)
    }
}