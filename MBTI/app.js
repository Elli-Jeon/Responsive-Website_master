const express = require('express');
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname,'public'))); // "/"로 연결하면 자동으로 "현재_위치/public"으로 이동
app.set('views',__dirname+'/views'); 
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get("/", (req, res)=>{
    // res.sendFile(path.join(__dirname,"/views/index.html")); 
    let context = {
        title : 'Check your MBTI',
        whichPage : 'main', 
        // main : mainpage, Q : question page
    }
    res.render("main.ejs", context); 
})

app.listen("8000", ()=>{
    console.log("MBTI page open!");
})