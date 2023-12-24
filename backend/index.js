import express from "express";
const app = express();
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js'
import dotenv from 'dotenv';
dotenv.config();
const PORT = 4000;

// app.get('/',(req,res)=> {
// console.log(req)
// return res.status(234).send('Welcome to my project');
// });

// Route for saving a new book

mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log(`App is connected to database:`);
    app.listen(PORT,()=>{
        console.log(`App is working on port ${PORT}`)
    })
})
.catch((error)=>{
 console.log(error);
})