const express = require("express");
const router = express.Router();
const {authUser, registerUser} = require('../Controllers/UserController');


router.route("/").post(registerUser)
router.route("/login").post(authUser)


module.exports = router