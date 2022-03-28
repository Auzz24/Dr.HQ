const { Schema, model } = require('mongoose');

const DepartmentSchema = new Schema({
    departmentName:{
        type: String
    },
    departmentLocation:{
        type: String
    },
    departmentFloor:{
        type: String
    },
    officeNumebr:{
        type: String
    },
    departmenDoctors:[
        {
            type: Schema.Types.ObjectId,
            ref: 'doctor'
    }
],
    departmentNurses:[
        {
            type: Schema.Types.ObjectId,
            ref: 'nurse'
    }
]

});

const Department = model('Department', DepartmentSchema);

module.exports = Department;