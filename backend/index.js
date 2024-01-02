import express from "express";
const app = express();
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const PORT = 5000;

// middlewares
app.use(express.json());
app.use('/books', booksRoute)
app.use(cors({
            origin:'http://localhost:3000',
            method:['GET','POST','PUT','DELETE'],
            allowedHeaders:['Content-Type'],
})
);

mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log(`Connected to database !`);
    app.listen(PORT,()=>{
        console.log(`App is working on port ${PORT}`)
    })
})
.catch((error)=>{
 console.log(error);
})