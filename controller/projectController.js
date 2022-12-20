const Projects = require('../model/projectModel')

const updateProject = async(req,res)=>{
    const {id} = req.params
    const {projectData} = req.body
    await Projects.findByIdAndDelete(id)
    await Projects.create({
        name:projectData.name,
        location:projectData.location,
        latitude:projectData.latitude,
        longitude:projectData.longitude,
        exec:projectData.exec,
        cost:projectData.cost,
        timespan:projectData.timespan,
        project_id:projectData.project_id,
        goal:projectData.goal,
        start_date:projectData.start_date,
        completion:projectData.completion,
        actual_cost:projectData.actual_cost,
        status:projectData.status
    })
}

module.exports = {updateProject}