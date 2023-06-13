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

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete({_id:id})
    const count = await Task.countDocuments({ "completed":false })
    return count
}

deleteTaskAndCount('645672045dc90cc9f036cb39').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
