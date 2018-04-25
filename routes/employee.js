var express = require('express');
var router = express.Router();
var Appointment = require('../lib/appointment');
var Customer = require('../lib/customer');
var Employee = require('../lib/employee');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('employee/index', {
        title: 'gotcha!'
    })
});

module.exports = router;