const { Schema, model } = require('mongoose');

const DoctorSchema = new Schema({
    name: { type: String, required: true, lowercase: true },
    title: { type: String, required: true, lowercase: true },
    phone: { type: String, required: true },
    email: { type: String, lowercase: true },
    address: { type: String, required: true },
    department:[
        {
            type: Schema.Types.ObjectId,
            ref: 'doctor'
        }
    ]
})

const Doctor = model('Doctor', DoctorSchema);

module.exports = Doctor