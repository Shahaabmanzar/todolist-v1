const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.get("/",function(req,res){

    var today = new Date();
    if(today.getDay()===6||today.getDay()===0){
        res.send("Yay its the weekend");
    }else{
        res.send("boo! i have to work");
    }
});

app.listen(3000,function(){
    console.log("server started on port 3000");
});