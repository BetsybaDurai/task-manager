require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete({_id:'64567d047bb772e5641a3ddf'} ).then((task) => {
    console.log(task)
   return Task.countDocuments({ completed:false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})