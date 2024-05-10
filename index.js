const express = require('express');
const  mongoose = require('mongoose');
const app = express();
const Product = require('../home-fish-v2/models/product')
const MONGOOSE_URI = require('./MongoUri')


app.use(express.json());
mongoose.connect(MONGOOSE_URI)
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
