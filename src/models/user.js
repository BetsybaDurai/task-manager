const mongoose = require('mongoose');
const validator = require('validator');
const User = mongoose.model('User', {
    name: {
        type: String, // Booleans, dates ,array, binary data, object IDs and more
        required: true,
        trim:true
    },
    email: {
        type: String, // Booleans, dates ,array, binary data, object IDs and more
        required: true,
        trim: true,
        lowercase:true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    }, 
    age: {
        type: Number,
        default:0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }, 
    password: {
        type: String,
        required: true,
        minLength: 7, //not working for validation in postman
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password should not be a string of password')
            }
        }
    }
})

module.exports = User;