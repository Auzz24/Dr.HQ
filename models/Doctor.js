const { Schema, model } = require('mongoose');

const DoctorSchema = new Schema({
    status: { type: Boolean, default: true, required: true },
    user_name: { type: String, required: true, lowercase: true },
    user_role: { type: String, required: true, lowercase: true },
    phone: { type: String, required: true },
    email: { type: String, lowercase: true },
    address: { type: String, required: true },
    password: { type: String, required: true },
    appointment: { type: String },
})

const Doctor = model('Doctor', DoctorSchema);

module.exports = Doctor