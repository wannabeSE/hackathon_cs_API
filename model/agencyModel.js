const mongoose = require('mongoose')

const agencySchema = mongoose.Schema({

    code:{
        type:String
    },
    name:{
        type: String
    },
    type:{
        type:String
    },
    description:{
        type:String  
    }
},{timestamps:true})

const Agency = mongoose.model('Agency',agencySchema)

module.exports = Agency