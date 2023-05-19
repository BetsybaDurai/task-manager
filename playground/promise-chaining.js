require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('6466475ffb877d5b25e27f0f', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({age:1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})