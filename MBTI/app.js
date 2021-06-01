const express = require('express');
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname,'public'))); // "/"로 연결하면 자동으로 "현재_위치/public"으로 이동

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html")); 
})

app.listen("8000", ()=>{
    console.log("MBTI page open!");
})