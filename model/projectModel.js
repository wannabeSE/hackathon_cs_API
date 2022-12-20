const mongoose = require('mongoose')

const projectSchema = mongoose.Schema(
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
        type: Number
      },
      timespan:{
        type: Number
      },
      project_id:{
        type : String,
        
      },
      goal: {
        type: String,
        
      },
      start_date: {
        type: String,
        
      },
      completion: {
        type: String,
        
      },
      actual_cost: {
        type: String,
        
      },
      status:{
        type:String,
        enum:['onGoing','done','cancelled','queued'],
        required:true, 
        default:'queued'
      }
    },
    {
      timestamps: true,
    }
  )
  const Projects = mongoose.model('Projects', projectSchema)
  module.exports = Projects 