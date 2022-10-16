var express=require("express");
var path=require("path");
var app=express();

var PORT=process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));



app.get("/",(req,res)=>{

    res.sendFile(__dirname+"/public/home.html");

});


app.listen(3000,()=>{
    console.log("listening at 3000");
});