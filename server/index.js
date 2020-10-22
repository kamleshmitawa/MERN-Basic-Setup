const express = require('express')
require("dotenv").config()
require('../database/db')
const cors = require('cors')
const bodyParser = require('body-parser')
const { router } = require('./routes')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.all("/", (req,res)=> { console.log('all routes here ', req.url) })
app.use(router)

app.listen(process.env.SERVER_PORT, ()=> {
    console.log(`Server is Running on PORT: ${process.env.SERVER_PORT}`)
})