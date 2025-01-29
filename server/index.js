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


// Handle the request
app.post('/createUser',(req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})



// Connect to Data Base (mongoose)
mongoose.connect("mongodb://127.0.0.1:27017/crud")


// running server
app.listen(3001,()=> {
    console.log('Server is Running...')
})