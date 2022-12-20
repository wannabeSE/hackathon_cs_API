const Projects = require('../model/projectModel')

const updateProject = async(req,res)=>{
    const {id} = req.params
    console.log(req.body)
    await Projects.findByIdAndDelete(id)
    await Projects.create({
        name:req.body.name,
        location:req.body.location,
        latitude:req.body.latitude,
        longitude:req.body.longitude,
        exec:req.body.exec,
        cost:req.body.cost,
        timespan:req.body.timespan,
        project_id:req.body.project_id,
        goal:req.body.goal,
        start_date:req.body.start_date,
        completion:req.body.completion,
        actual_cost:req.body.actual_cost,
        status:req.body.status
    })
    res.send({success:true})
}

module.exports = {updateProject}