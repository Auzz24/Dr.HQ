const router = require('express').Router();

const {
    createDoctor,
    getAllDoctors
} = require('../../controllers/doctor-controller');

router
.route('/')
.post(createDoctor)
.get(getAllDoctors)

module.exports = router; 