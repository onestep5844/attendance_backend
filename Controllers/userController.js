const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const Register = require("../Models/userModel")

//@desc Register New User
//@ POST /api/user
//@access PUBLIC

const registerUser = asyncHandler(async (req,res) => {
    const {name, email, phone, password, confirmPassword} = req.body

    const userExists = await Register.findOne({email})

    if(userExists){
        res.status(400).json({message: 'User Already Exists'})
    }

    const user = Register.create({
        name,
        email,
        phone,
        password,
        confirmPassword
    })

    if(user){
        res.status(201).json({
            name: user.name,
            email: user.email,
            phone: user.phone,
            password: user.password,
            confirmPassword: user.confirmPassword
        })
    } else {
        res.status(400)
        throw new Error("Invalid User data");s
    }
})

//@desc Login
//@route POST /api/user/login
//@access PUBLIC

const authUser = asyncHandler(async (req,res) => {
    const {email,password} = req.body

    const user = await Register.findOne({email})

    if(Register && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            emial: user.email,
            phone: user.phone,
            token: generateToken(user._id)
        })
    }else {
        res.status(401)
        throw new Error("Invalid Email or Password")
    }
})


module.exports = {registerUser, authUser}