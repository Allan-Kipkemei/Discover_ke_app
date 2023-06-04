const mongoose=require('mongoose')

const userSchema= mongoose.Schema({

username : String,
email : String,
message : String,

})

module.exports = mongoose.model('Contact', userSchema)