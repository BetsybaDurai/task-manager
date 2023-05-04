// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb'); // destructuring

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id)
console.log(id.getTimestamp());
console.log(id.id.length); // returns in bytes
console.log(id.toHexString());
console.log(id.toHexString().length);


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database');  
    }

    console.log('Connected correctly');

    const db = client.db(databaseName);

    db.collection('users').insertOne({
        _id:id,
        name: 'Priya',
        age:27
    }, (error, result) => {
        if (error) {
            console.log('Unable to insert user')
        }
        console.log(result.ops)
    })

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

    // db.collection('tasks').insertMany([
    //     { 
    //         description: 'Task1',
    //         completed :false
    //     },
    //     { 
    //         description: 'Task2',
    //         completed :true
    //     },
    //     { 
    //         description: 'Task3',
    //         completed :true
    //     },
    //  ],  (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents of tasks!')
    //     }
        
    //     console.log(result.ops)
    // })
})