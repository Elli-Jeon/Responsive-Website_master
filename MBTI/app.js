const express = require('express');
const path = require("path");
const fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname,'public'))); // "/"로 연결하면 자동으로 "현재_위치/public"으로 이동
app.set('views',__dirname+'/views'); 
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.get("/", (req, res)=>{
    res.render("main.ejs"); 
})

app.get("/question",(req,res)=>{
    fs.readFile("./public/data/data.json","utf-8",(err, data)=>{
        let jsonData = JSON.parse(data);
        res.render("question.ejs", {jsonData});
    }) //https://kingle1024.tistory.com/185
})

app.listen("8000", ()=>{
    console.log("MBTI page open!");
})