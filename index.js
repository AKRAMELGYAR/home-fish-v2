const express = require('express');
const  mongoose = require('mongoose');
const app = express();
const Product = require('../home-fish-v2/models/product')



app.use(express.json());
MONGOOSE_URI = 'mongodb+srv://akramelgyar:Uchihasasuke2003@application.tlxqlel.mongodb.net/app?retryWrites=true&w=majority&appName=application'
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
