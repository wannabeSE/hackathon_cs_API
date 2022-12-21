const Projects = require('../model/projectModel')
const Proposal = require('../model/proposalModel')
const Component = require('../model/componentModel')
const csvtojson = require('csvtojson')
const Constraints = require('../model/constraintsModel')
const Agency = require('../model/agencyModel')




const registerProject = async(req, res)=>{
    const {name, location, latitude, longitude, exec, cost, timespan, project_id, goal, start_date, completion, actual_cost } = req.body
    const project =await Projects.create({
        name:name,
        location:location,
        latitude:latitude,
        longitude:longitude,
        exec:exec,
        cost:cost,
        timespan:timespan,
        project_id:project_id,
        goal:goal,
        start_date:start_date,
        completion:completion,
        actual_cost:actual_cost
    })
    if(project){
        res.json(project)
    }else{
        res.send({msg:"error occurred"})
    }

}
const csvLoader = async(fl,db)=>{
    await csvtojson()
    .fromFile(fl)
    .then((csvData)=>{
        console.log(csvData)
        db.insertMany(csvData).then(function(){
            console.log('Data Inserted')
        }).catch(function(err){
            console.log(err)
        })
    })
}

const projectCsv = async(req, res)=> {

    csvLoader('projects - projects.csv',Projects)
    res.send({success:true})
}

const proposalCsv = async(req, res)=> {
   
    csvLoader('proposals - proposals.csv',Proposal)
    res.send({success:true})
}

const componentsCsv = async (req, res)=>{
    csvLoader('components.csv',Component)
    res.send({success:true})
}

const constraintsCsv = async (req, res)=>{
    csvLoader('constraints - constraints.csv',Constraints)
    res.send({success:true})
}

const agencyCsv = async (req, res)=>{
   
    csvLoader('agencies.csv',Agency)
    res.send({success:true})
}


module.exports = { registerProject, projectCsv , proposalCsv, componentsCsv, constraintsCsv, agencyCsv}