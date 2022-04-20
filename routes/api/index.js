const router = require('express').Router();
// const departmentRoutes = require('./department-routes');
const doctorRoutes = require ('./doctor-routes'); 

// router.use('/department', departmentRoutes);
router.use('/doctor', doctorRoutes)

module.exports = router; 