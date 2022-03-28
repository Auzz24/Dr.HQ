const router = require('express').Router();

const {
    createDepartment
} = require('../../controllers/department-controller');

router
.route('/')
.post(createDepartment)

module.exports = router; 