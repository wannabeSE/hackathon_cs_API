const mongoose = require('mongoose')

const constraintSchema = mongoose.Schema({

    code:{
        type: String
    },
    max_limit:{
        type: String
    },
    constraint_type:{
        type: String
    }
},{timestamps:true})

const Constraints = mongoose.model('Constraints', constraintSchema)
module.exports = Constraints