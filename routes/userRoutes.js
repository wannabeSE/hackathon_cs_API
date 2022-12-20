const express = require('express')
const router = express.Router()
const { login, getUserInfo } = require('../controller/userController')
const { route } = require('./dataRoute')

router.route('/login').post(login)
router.route('/find-user/:email').get(getUserInfo)
module.exports = router