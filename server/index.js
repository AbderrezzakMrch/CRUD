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

// Connect to Data Base (mongoose)
mongoose.connect("mongodb://127.0.0.1:27017/crud")

// Handle the request
app.post('/createUser',(req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// fetch data of user from data base
app.get('/',(req,res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// fetch user by his id
app.get('/getUser/:id',(req,res) => {
    const id = req.params.id
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// update user's informations by his ID
app.put('/updateUser/:id',(req,res) => {
    const id = req.params.id
    UserModel.findByIdAndUpdate(
        {_id: id},
        {name: req.body.name,
        email:req.body.email,
        age:req.body.age})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

// running server
app.listen(3001,()=> {
    console.log('Server is Running...')
})