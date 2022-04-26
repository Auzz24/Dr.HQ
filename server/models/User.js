const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    firstName: { type: String, required: true, lowercase: true },
    lastName: { type: String, required: true, lowercase: true },
    email: { type: String, lowercase: true },
    password: { type: String, required: true },
    doctor:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Doctor'
        }
    ]
})

const User = model('User', UserSchema);

module.exports = User