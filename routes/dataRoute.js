const express = require('express')
const router = express.Router()

const { projectCsv, registerProject, proposalCsv, componentsCsv} = require('../data/data_push')

router.route('/register-project-from-csv').get(projectCsv)
router.route('/register-project').post(registerProject)
router.route('/register-proposal-from-csv').post(proposalCsv)
router.route('/register-component-from-csv').post(componentsCsv)



module.exports = router