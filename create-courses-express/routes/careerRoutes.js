const express = require("express")
const courseModel = require("../models/courseModel")
const courseRouter = express.Router()

courseRouter.post("/", async(req,res)=>{
    const { courseNameFromReact, courseDescFromReact} = req.body

    const newCourse = new courseModel({
        courseName: courseNameFromReact,
        courseDescription : courseDescFromReact
    })

    await newCourse.save()
    res.json({
        message: "Course Created"
    })
})

courseRouter.get("/", async(req,res)=>{
    const allCourses = await courseModel.find().exec()
    res.json(allCourses)
})


courseRouter.delete("/:courseId", async(req,res)=>{
    await courseModel.deleteOne({_id:req.params.courseId})
    res.json({
        message:'Course Deleted'
    })
})


courseRouter.put("/:courseId", async(req,res)=>{
const {newCourseName, newCourseDesc} = req.body
const course = await courseModel.findById({_id:req.params.courseId}).exec()
course.courseName = newCourseName
course.courseDescription = newCourseDesc
await course.save()
res.json({
    message: "Course Edited"
})
})

module.exports= courseRouter