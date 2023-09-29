const express=require("express");
const bodyParser=require('body-parser');
//local imports
const connectDb= require('./db')
const  userRoutes=require("./controller/user.controller")
const {errorHandler}=require('./middlewares/index.js')

const app =express();


//middleware
app.use(bodyParser.json());
app.use('/kenwaves/api/v1/users',userRoutes)
app.use(errorHandler)

connectDb().then(()=>{
    console.log('mongo db connecteed succesfuly');
    app.listen(3000,()=>console.log("SERVER UP AND RUNNING ON PORT 3000"))
}).catch(err=>console.log(err))