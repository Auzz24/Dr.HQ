const { Schema, model } = require('mongoose');

const DepartmentSchema = new Schema({
    departmentName: {
        type: String
    },
    departmentLocation: {
        type: String
    },
    departmentFloor: {
        type: String
    },
    officeNumber: {
        type: String
    },
    departmentDoctors: [
        {
            type: Schema.Types.ObjectId,
            ref: 'doctor'
        }
    ],
    departmentNurses: [
        {
            type: Schema.Types.ObjectId,
            ref: 'nurse'
        }
    ]

});

const Department = model('Department', DepartmentSchema);

module.exports = Department;