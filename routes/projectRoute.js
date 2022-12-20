const express = require('express')
const { updateProject } = require('../controller/projectController')
const router = express.Router()

router.route('/update-project/:id').post(updateProject)

module.exports =router