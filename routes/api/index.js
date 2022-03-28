const router = require('express').Router();
const departmentRoutes = require('./department-routes');

router.use('/department', departmentRoutes);


module.exports = router;