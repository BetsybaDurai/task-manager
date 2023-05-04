// CRUD create read update delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database');  
    }

    console.log('Connected correctly');

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Sowmya',
    //     age:27
    // }, (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Seeni',
    //         age:30
    //     }, {
    //         name: 'Gowtham',
    //         age:30
    //     }, {
    //         name: 'Mugudan',
    //         age:30
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }
        
    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        { 
            description: 'Task1',
            completed :false
        },
        { 
            description: 'Task2',
            completed :true
        },
        { 
            description: 'Task3',
            completed :true
        },
     ],  (error, result) => {
        if (error) {
            return console.log('Unable to insert documents of tasks!')
        }
        
        console.log(result.ops)
    })
})