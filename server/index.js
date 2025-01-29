// import library
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

// call the express function
const app = express()
// Cors is to access clinet side (front end)
app.use(cors())
app.use(express.json())



app.get('/',(req,res)=> {
    res.status(200).send('helle fuck you')
})




// Connect to Data Base (mongoose)
mongoose.connect("mongodb://127.0.0.1:27017/crud")


// running server
app.listen(3001,()=> {
    console.log('Server is Running...')
})