// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'staff', 'customer'],
    },
    status: {
        type: String,
        required: true,
        enum: ['active', 'inactive', 'pending', 'banned'],
    },
    name: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    address: {
        type: String,
    },
    createAt: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
