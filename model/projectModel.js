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
      project_id:{
        type : String,
        unique : true
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
        enum:['onGoing','done','cancelled'],
        required:true, 
        default:'onGoing'
      }
    },
    {
      timestamps: true,
    }
  )
  const Projects = mongoose.model('Projects', projectSchema)
  module.exports = Projects 