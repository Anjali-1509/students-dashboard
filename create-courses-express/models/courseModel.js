const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    courseName: String,
    courseDescription :String
})

module.exports= mongoose.model("course" , courseSchema)