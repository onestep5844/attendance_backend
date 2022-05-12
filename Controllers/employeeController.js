const asyncHandler = require("express-async-handler");
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
            bloodGroup
        })
        const newEmp = await emp.save()
        res.status(200).json(newEmp)
    
})


module.exports = {empd};