const mongoose = require('mongoose')

const proposalSchema = mongoose.Schema(
    {
      name: {
        type: String,
      },
      location: {
        type: String,
      },
      latitude: {
        type: String,
        
      },
      longitude: {
        type: String,
      },
      exec:{
        type:String
      },
      cost:{
        type:String
      },
      timespan:{
        type:String
      },
      project_id:{
        type : String,
        unique : true
      },
      goal: {
        type: String,
        
      },
      proposalDate:{
        type: Date
      },
      status:{
        type:String,
        enum:['inReview','accepted','cancelled'],
        required:true, 
        default:'inReview'
      }
    },
    {
      timestamps: true,
    }
  )
  const Proposal = mongoose.model('Proposal', proposalSchema)
  module.exports = Proposal 