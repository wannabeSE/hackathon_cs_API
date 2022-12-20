const express = require('express')
const router = express.Router()

const { projectCsv, registerProject, proposalCsv, componentsCsv, constraintsCsv, agencyCsv } = require('../data/data_push')
const { getProjects, getProposals } = require('../data/data_fetch')



router.route('/register-project-from-csv').post(projectCsv)
router.route('/register-project').post(registerProject)
router.route('/register-proposal-from-csv').post(proposalCsv)
router.route('/register-component-from-csv').post(componentsCsv)
router.route('/get-projects').get(getProjects)
router.route('/get-proposals').get(getProposals)
router.route('/register-constraints-from-csv').post(constraintsCsv)
router.route('/register-agency-from-csv').post(agencyCsv)



module.exports = router