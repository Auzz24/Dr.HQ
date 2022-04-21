const { Schema, model } = require('mongoose');

const DoctorSchema = new Schema({
    name: { type: String, required: true, lowercase: true },
    email: { type: String, lowercase: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    department:[
        {
            type: Schema.Types.ObjectId,
            ref: 'department'
        }
    ]
})

const Doctor = model('Doctor', DoctorSchema);

module.exports = Doctor