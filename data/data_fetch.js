const Projects = require('../model/projectModel')
const Proposal = require('../model/proposalModel')
const Component = require('../model/componentModel')

const getProjects = async(req, res)=>{
    const projects = await Projects.find({})
    res.json({projects})
}

const getProposals = async(req, res)=>{
    const proposal = await Proposal.find({})
    res.json({proposal})
}


module.exports = { getProjects, getProposals }
