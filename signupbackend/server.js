const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()
console.log(process.env.DATABASE_ACCESS);
mongoose.connect("mongodb+srv://admin:admin@cluster0.ytx3i.mongodb.net/test?retryWrites=true&w=majority", () => console.log("database connected"))

app.use(express.json())
app.use(cors())
app.use('/app',routesUrls)
app.listen(4000, () => console.log("server is up and running"))