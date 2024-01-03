const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const studentRouter = require("./routes/studentRouter")

const app = express()

// middlewares
app.use(cors({
    origin: "*",
    methods: "*",
    allowedHeaders: "*",
    exposedHeaders: "*"
}))
app.use(express.json())
app.use("/students", studentRouter)

const connectToDbAndStart= async()=>{
    await mongoose.connect("mongodb+srv://anjalis1509:anjalis1509@cluster0.rhdux0p.mongodb.net/burzt-express")
    console.log("CONNECTED TO DB")
    const PORT = 8001
    app.listen(PORT, ()=>{
        console.log(`APPLICATION IS RUNNING ON ${PORT}`)
    })
}

connectToDbAndStart()