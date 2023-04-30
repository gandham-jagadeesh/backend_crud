const express = require("express");
const app     = express();
const port    = 4000;


app.use(express.json());


app.get("/api/",(req,res)=>{
    res.send("hello world");
})


app.listen(port,()=>{
    console.log("listening");
})