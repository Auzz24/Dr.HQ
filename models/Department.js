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
    officeNumber:{
        type: String
    },
    doctors:[
        {
            type: Schema.Types.ObjectId,
            ref: 'doctor'
    }
],
});

const Department = model('Department', DepartmentSchema);

module.exports = Department;