const express = require("express");
require('./db/mongoose')
const User = require('./models/user')
const Task=require('./models/task')
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())  //parse incoming JSON to Object
app.post('/users', (req, res) => {
    // console.log(req.body)
    // res.send('testing!')
    const user = new User(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        // res.status(400) // setting the status for response
        res.status(400).send(e)
       
    })
})

app.get('/users', (req, res) => {
    User.find({}).then((users) => { //fetching all users
        res.send(users)
    }).catch((e) => {
        res.status(500).send()
     })
})

app.get('/users/:id', (req, res) => {
    // console.log(req.params)
    const _id = req.params.id; //didn't change to object or string
    User.findById(_id).then((user) => {
        if (!user) {
            res.status(404).send(user)
        }
        res.send(user)
    }).catch((e)=> {
        res.status(500).send(e)
    })
})



app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => { //fetching all tasks
        res.send(tasks)
    }).catch((e) => {
        res.status(500).send()
     })
})

app.get('/tasks/:id', (req, res) => {
    // console.log(req.params)
    const _id = req.params.id; //didn't change to object or string
    Task.findById(_id).then((task) => {
        if (!task) {
            res.status(404).send(task)
        }
        res.send(task)
    }).catch((e)=> {
        res.status(500).send(e)
    })
})
app.post('/tasks', (req, res) => {
    // console.log(req.body)
    // res.send('testing!')
    const task = new Task(req.body);
    task.save().then(() => {
        res.send(task);
    }).catch((e) => {
        // res.status(400) // setting the status for response
        res.status(201).status(400).send(e)
        // res.send(e)
    })
})
app.listen(port, () => {
    console.log('Server is up on port '+port)
})