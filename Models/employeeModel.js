const mongoose = require('mongoose')

const employeeDetails = mongoose.Schema({
   firstName: {
       type: String,
       required: true
   },
   lastName: {
       type: String,
       required: true
   },
   empId: {
       type: Number,
       required: true
   },
   phone: {
       type: Number,
       required: true
   },
   bloodGroup: {
       type: String,
   }
})

module.exports = new mongoose.model("EmployeeDetails", employeeDetails)