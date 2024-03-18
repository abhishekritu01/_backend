
require('dotenv').config();

const express = require("express");
const app = express();
const port = 3000;

const data ={
    name: "Aman",
    age: 21,
    city: "Delhi"

}

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/about',(req,res)=>{
    res.send("this is about page")
})

app.get('/home',(req,res)=>{
    res.send("this is the home page");
})

app.get('/info',(req,res)=>{
    res.json(data)
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})