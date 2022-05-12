const express = require('express')
const router = express.Router()
const {empd} = require('../Controllers/employeeController')

router.route("/").post(empd)
// router.route("/upload").post(uploadImage)


module.exports = router