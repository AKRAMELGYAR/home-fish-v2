const express = require('express');
const  mongoose = require('mongoose');
const app = express();
const Product = require('../home-fish-v2/models/product')
const MONGOOSE_URI = require('./MongoUri')


app.use(express.json());
mongoose.connect('mongodb+srv://moustafakolkailaofficial:Lord@*611#@M&K!10@cluster0.qnja7yk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
 .then(()=>{
    app.listen(3000 , ()=>{
        console.log("started on port 3000")
    })
 })
 .catch(err=>{
    console.log(err)
 })

 const usersRouter = require('./router/userRouter');
 app.use('/api/users', usersRouter) // /api/users

 const product = new Product({
    name : "test",
    price : 1500,
    descripion : "testing",
 })
 product.save();
