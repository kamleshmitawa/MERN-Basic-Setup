const mongoose = require('mongoose')

const loginSchema = mongoose.Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String },
}, { collection: "login", timestamps: true })

const loginModel = mongoose.model('login', loginSchema)

module.exports = { loginModel }
