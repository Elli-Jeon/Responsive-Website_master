const express = require('express');
const path = require("path");
const fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname,'public'))); // "/"로 연결하면 자동으로 "현재_위치/public"으로 이동
app.set('views',__dirname+'/views'); 
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/", (req, res)=>{
    res.render("main.ejs"); 
})

/*
app.get("/question",(req,res)=>{
    fs.readFile("./public/data/data.json","utf-8",(err, data)=>{
        let jsonData = JSON.parse(data);
        res.render("question.ejs", {jsonData});
    }) //https://kingle1024.tistory.com/185
})
*/ // 이렇게 서버 쪽에서 readFile로 ejs에 같이 미들웨어 처럼 달아보내주면 ejs에서 사용이 가능. 변수처럼. <%=%>으로
// 하지만 클라 사이드에서 js로 처리해주고 싶으니깐, fetch를 사용할 것.


app.get("/question",(req,res)=>{
    console.log(req.query);
    let id = req.query.id;
    res.render("question.ejs", {id});
})
// 원래는 .post로 하고, req.body로 해줘야하나, req.query써보고 싶어서 get으로 진행.

app.listen("8000", ()=>{
    console.log("MBTI page open!");
})