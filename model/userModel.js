const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      
      email: {
        type: String,
        required: true,
        unique: true,
      },
     
      
      role: {
        type: String,
        enum:['sysAdmin','ECNEC','MOP','EXEC','APP'],
        required: true,
        default: 'APP',
      },
      
      dp: {
        type: String,
        
      },
    //   contactInfo: {
    //     type: String,
    //     required: true,
    //   },
    },
    {
      timestamps: true,
    }
  )
  const User = mongoose.model('User', userSchema)
  module.exports = User