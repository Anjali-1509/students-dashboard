const mongoose= require("mongoose")

const studentSchema= new mongoose.Schema({
    userName : String,
    passwordHash: String
})

const studentModel = mongoose.model("students", studentSchema)

module.exports= studentModel