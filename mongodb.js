// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb'); // destructuring

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database');  
    }

    console.log('Connected correctly');

    const db = client.db(databaseName);

     db.collection('users').findOne({ name:"Betsyba", age:27 }, (error, user) => {
        if (error) {
            console.log('Unable to fetch')
        }
        console.log(user)
        
     })
    
    db.collection('users').findOne({ _id: new ObjectID("64537d9460d1d784f459ea27") }, (error, user) => {
        if (error) {
            console.log('Unable to fetch')
        }
        console.log(user)
        
    })
    // find menthod uses the cursor
    db.collection('users').find({ age: 27 }).toArray((error, users) => {
        console.log(users)
    })

    db.collection('users').find({ age: 27 }).count((error, count) => {
        console.log(count)
    })

    // Goal: use findone to fetch last task by its id
    db.collection('tasks').findOne({ _id: new ObjectID("6453859212bbf6bd60caba6b") }, (error, task) => {
        if (error) { console.log('Unable to fetch task') }
        console.log(task);
    })

    //Goal : Use find to fetch all tasks that are not completed
    db.collection('tasks').find({ completed:false }).toArray((error,tasks) => {
         console.log(tasks)
     })
})