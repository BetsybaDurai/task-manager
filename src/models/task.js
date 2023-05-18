const mongoose = require('mongoose');
const validator = require('validator');
const Task = mongoose.model('tasks', {
    description: {
        type: String,  // Booleans, dates ,array, binary data, object IDs and more
        required: true,
        trim:true
        
    },
    completed: {
        type: Boolean,
        default:false
    }
})

module.exports = Task;