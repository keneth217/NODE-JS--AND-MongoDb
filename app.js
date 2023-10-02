const express=require("express");
const bodyParser=require('body-parser');
require("dotenv").config();
//local imports
const connectDb= require('./db')
const  userRoutes=require("./controller/user.controller")
const {errorHandler}=require('./middlewares/index.js')

const app =express();


//middleware
app.use(bodyParser.json());
app.use('/kenwaves/api/v1/users',userRoutes)
app.use(errorHandler)


const port=process.env.PORT

connectDb().then(()=>{
    console.log('mongo db connecteed succesfuly');
    console.log(`MY SERVER IS UP AND RUNNING ON PORT : ${port}`);
    app.listen(port,()=>console.log("SERVER UP AND RUNNING ON PORT ",process.env.PORT))
})