const express = require("express");
const app     = express();
const port    = process.env.port || 4000;


app.use(express.json());


app.get("/",(req,res)=>{
    res.send("hello world");
})


app.listen(port,()=>{
    console.log("server started");
})