const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const courseRouter = require("./routes/careerRoutes")

const app = express()

app.use(express.json())
app.use(cors({
    origin:"*",
    methods: "*",
    allowedHeaders:"*",
    exposedHeaders:"*"
}))

app.use("/courses", courseRouter)

const connectToDbAndStart= async()=>{
    await mongoose.connect("mongodb+srv://anjalis1509:anjalis1509@cluster0.rhdux0p.mongodb.net/todo-app")
    console.log("connected to db")
    app.listen(8000)
}

connectToDbAndStart()