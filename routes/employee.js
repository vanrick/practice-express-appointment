const express = require('express');
var router = express.Router();
var Appointment = require('../lib/appointment');
var Customer = require('../lib/customer');
var Employee = require('../lib/employee');

console.log('x ', Appointment);

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    Employee.find.then(function(employee) {
        res.render('employee/show', {
            employee: employee.rows[0]
        })
    })
});

module.exports = router;