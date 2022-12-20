const Projects = require('../model/projectModel')
const Proposal = require('../model/proposalModel')
const Component = require('../model/componentModel')
const csvtojson = require('csvtojson')
const Constraints = require('../model/constraintsModel')
const Agency = require('../model/agencyModel')




const registerProject = async(req, res)=>{
    const {name, location, latitude, longitude, project_id, goal, start_date, completion, actual_cost } = req.body
    const project =await Projects.create({
        name:name,
        location:location,
        latitude:latitude,
        longitude:longitude,
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


const projectCsv = async(req, res)=> {

    await csvtojson()
    .fromFile('projects - projects.csv')
    .then((csvData)=>{
        console.log(csvData)
        Projects.insertMany(csvData).then(function(){
            console.log('Data Inserted')
            res.json({success:true})
        }).catch(function(err){
            console.log(err)
        })
    })
}

const proposalCsv = async(req, res)=> {
   
    await csvtojson()
    .fromFile('proposals - proposals.csv')
    .then((csvData)=>{
        console.log(csvData)
        Proposal.insertMany(csvData).then(function(){
            console.log('Data Inserted')
            res.json({success:true})
        }).catch(function(err){
            console.log(err)
        })
    })
}

const componentsCsv = async (req, res)=>{
    await csvtojson()
    .fromFile('components.csv')
    .then((csvData)=>{
        console.log(csvData)
        Component.insertMany(csvData).then(function(){
            console.log('Data Inserted')
            res.json({success:true})
        }).catch(function(err){
            console.log(err)
        })
    })
}

const constraintsCsv = async (req, res)=>{
    await csvtojson()
    .fromFile('constraints - constraints.csv')
    .then((csvData)=>{
        console.log(csvData)
        Constraints.insertMany(csvData).then(function(){
            console.log('Data Inserted')
            res.json({success:true})
        }).catch(function(err){
            console.log(err)
        })
    })
}

const agencyCsv = async (req, res)=>{
    await csvtojson()
    .fromFile('agencies.csv')
    .then((csvData)=>{
        console.log(csvData)
        Agency.insertMany(csvData).then(function(){
            console.log('Data Inserted')
            res.json({success:true})
        }).catch(function(err){
            console.log(err)
        })
    })
}


module.exports = { registerProject, projectCsv , proposalCsv, componentsCsv, constraintsCsv, agencyCsv}