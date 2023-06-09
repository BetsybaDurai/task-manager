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

    //  db.collection('users').findOne({ name:"Betsyba", age:27 }, (error, user) => {
    //     if (error) {
    //         console.log('Unable to fetch')
    //     }
    //     console.log(user)
        
    //  })
    
    // db.collection('users').findOne({ _id: new ObjectID("64537d9460d1d784f459ea27") }, (error, user) => {
    //     if (error) {
    //         console.log('Unable to fetch')
    //     }
    //     console.log(user)
        
    // })
    // // find menthod uses the cursor
    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     console.log(count)
    // })

    // // Goal: use findone to fetch last task by its id
    // db.collection('tasks').findOne({ _id: new ObjectID("6453859212bbf6bd60caba6b") }, (error, task) => {
    //     if (error) { console.log('Unable to fetch task') }
    //     console.log(task);
    // })

    // //Goal : Use find to fetch all tasks that are not completed
    // db.collection('tasks').find({ completed:false }).toArray((error,tasks) => {
    //      console.log(tasks)
    //  })

    //Promises and updating document
    const updatePromise = db.collection('users').updateOne({
        _id:new ObjectID("64537d9460d1d784f459ea27")
    }, {
        $set: {
            name:'TamilSelvi'
        },
        $inc: {
            age: -1
        }
    })

   // we can remove the updatePromise variable, it will work 
    updatePromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    
    db.collection('tasks').updateMany({
            completed:false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })

    // deleting a document
    db.collection('users').deleteMany({
        age:27
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('tasks').deleteOne({ description: "Task1" }).then((result) => {
        console.log("deleted successfully")
    }).catch((error)=> {
        console.log("Unable to delete")
    })
})