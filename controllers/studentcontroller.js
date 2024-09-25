 const Student = require('../models/Student');
  async function addStudent(req,res){
    try{
        console.log(req.body);
        let student = new Student(req.body);
        await student.save();
        res.end("<h1> Data has been inserted sucessfully..</h1>")
    } catch(err){
        console.log(err);
    }
 }
 async function getStudents(req,res){
    try{
        let students = await Student.find({});
        res.send(students)
    }catch(err){
        console.log(err.message);
    }
 }
 module.exports={
    addStudent,
    getStudents
 }