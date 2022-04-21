const { Doctor } = require('../server/models');

const doctorController = {

getAllDoctors(req,res){
    Doctor.find({})
    .then(dbdoctorData => res.json(dbdoctorData))
    .catch(err=>{
        console.log(err);
        res.status(400).json(err);
    });
},

createDoctor({ body }, res) {
    Doctor.create(body)
      .then(dbdoctorData => res.json(dbdoctorData))
      .catch(err => res.status(400).json(err));
  }

};

module.exports = doctorController;