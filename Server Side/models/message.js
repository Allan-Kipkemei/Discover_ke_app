const mongoose=require('mongoose')

const userSchema= mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,

    }
})

module.exports =('User', userSchema)