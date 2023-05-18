const mongoose = require('mongoose');
// const validator = require('validator');
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex:true
})

// const User = mongoose.model('User', {
//     name: {
//         type: String, // Booleans, dates ,array, binary data, object IDs and more
//         required: true,
//         trim:true
//     },
//     email: {
//         type: String, // Booleans, dates ,array, binary data, object IDs and more
//         required: true,
//         trim: true,
//         lowercase:true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid')
//             }
//         }
//     }, 
//     age: {
//         type: Number,
//         default:0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     }, 
//     password: {
//         type: String,
//         required: true,
//         minLength: 7,
//         trim: true,
//         validate(value) {
//             if (value.toLowerCase().includes('password')) {
//                 throw new Error('Password should not be a string of password')
//             }
//         }
//     }
// })

// const me = new User({
//     name: ' Data  ',
//     email: "DATA@GMAIL.COM ",
//     age: 27,
//     password:'phone@1223' 
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })

// const Task = mongoose.model('tasks', {
//     description: {
//         type: String,  // Booleans, dates ,array, binary data, object IDs and more
//         required: true,
//         trim:true
        
//     },
//     completed: {
//         type: Boolean,
//         default:false
//     }
// })

// const newTask = new Task({
//     description: "Clean the car",
//    // completed:true
// })

// newTask.save().then(() => {
//     console.log(newTask)
// }).catch((error) => {
//     console.log(error)
// })