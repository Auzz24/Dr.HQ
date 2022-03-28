const { Department } = require('../model');

const departmentController = {

getAllDepartments(req,res){
    Department.find({})
    .then(dbDepartmentData => res.json(dbDepartmentData))
    .catch(err=>{
        console.log(err);
        res.status(400).json(err);
    });
},

createDepartment({ body }, res) {
    Department.create(body)
      .then(dbDepartmentData => res.json(dbDepartmentData))
      .catch(err => res.status(400).json(err));
  }

};

module.exports = departmentController;