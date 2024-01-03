const express = require("express")
const studentModel = require("../models/studentModel")
const studentRouter = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const isUserAuthorized = require("../middlewares/isUserAuthorized")

studentRouter.post("/signup", async (req, res) => {
    const { username, password } = req.body
    existingUser = await studentModel.findOne({ userName: username }).exec()
    if (existingUser) {
        res.json({
            error: "Error ! username already exists"
        })
    }
    else {
        const hash = bcrypt.hashSync(password, 10)
        const newStudent = await studentModel({
            userName: username,
            passwordHash: hash
        })
        await newStudent.save()
        res.status(201).json({
            message: "User Created"
        })
    }
})


studentRouter.post("/signin", async (req, res) => {
 const {username, password} = req.body
 existingUser = await studentModel.findOne({userName: username}). exec()
 if(!existingUser){
    res.json({
        error : "Error ! username does not exist"
    })
 }
 else {
  const isPasswordMatch = bcrypt.compareSync(password, existingUser.passwordHash)
  if(!isPasswordMatch){
    res.json({
        error : "Error ! invalid password"
    })
  }
  else {
    const token = jwt.sign({
        userId : existingUser._id,
        userName: existingUser.userName
    }, "s3cret")
    res.set("authorization", token)
    res.json({
        message : "Sign in successful"
    })
  }
 }
})


studentRouter.get("/user",isUserAuthorized, async (req, res) => {
const {userId, userName} = req.currentUser
res.json({
    userId : userId,
    userName: userName
})
})

studentRouter.get("/others", isUserAuthorized, async (req, res) => {
const allStudents = await studentModel.find().exec()
const otherStudents=allStudents.filter((student)=>
student._id.toString() !== req.currentUser.userId
)
const otherStudentDetails = otherStudents.map((student)=>{
    return {
        userId : student._id,
        userName: student.userName
    }
})
res.json(otherStudentDetails)
})

module.exports = studentRouter