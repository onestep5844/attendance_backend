const asyncHandler = require("express-async-handler");
const multer = require("multer");
const fs = require("fs");
const EmployeeDetails = require('../Models/employeeModel');

//@desc Add Employee Details
//@route POST
//@access public

const empd = asyncHandler(async (req,res) => {
    const {firstName, lastName, empId, phone, bloodGroup} = req.body

        const emp = new EmployeeDetails({
            firstName,
            lastName,
            empId,
            phone,
            bloodGroup,
            img
        })
        const newEmp = await emp.save()
        res.status(200).json(newEmp)
    
})

//Storage
var storage = multer.diskStorage({
    destination: function(req, file, db){
        db(null, 'uploads')
    },
    filename: function(req,file,db){
        db(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({storage:storage})

// //@desc Upload Employee Photo
// //@route POST
// //@access public

// const uploadImage = asyncHandler(async (req,res) => {
//     var img = fs.readFileSync(req.file.path);
//     var encode_img = img.toString('base64');
//     var final_img = {
//         contentType:req.file.mimetype,
//         image:new Buffer(encode_img,'base64')
//     };
//     imageModel.create(final_img,function(err,result){
//         if(err){
//             console.log(err);
//         }else{
//             console.log(result.img.Buffer);
//             console.log("Saved To database");
//             res.contentType(final_img.contentType);
//             res.send(final_img.image);
//         }
//     })
// })

module.exports = {empd};