var express=require("express"); 
var bodyParser=require("body-parser"); 
  
const mongoose = require('mongoose'); 
mongoose.connect('mongodb+srv://valeriavelasquez:tomato@cluster0.bmsdw.mongodb.net/forApp?retryWrites=true&w=majority', { useNewUrlParser: true }); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
    console.log("connection succeeded"); 
}) 

var app=express()
  
  
app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true
})); 

app.get('/',function(req,res){ 
    res.sendFile(__dirname + "/index.html");
    
app.post('/matchMeLater', function(req,res){ 
    var fname = req.body.fname; 
    var lname =req.body.lname; 
    var email = req.body.email; 
    var age =req.body.age;
    var q1 = req.body.q1;
    var q2 = req.body.q2;
    var q3 = req.body.q3;
    var q4 = req.body.q4;
    var q5 = req.body.q5;
    var q6 = req.body.q6;
    var q7 = req.body.q7;
    var q8 = req.body.q8;
    var q9 = req.body.q9;
    var q10 = req.body.q10;
    var q11= req.body. q11;
    var q12 = req.body.q12 ;
    console.log(q1);
    var data = { 
        "fname": fname, 
        "lname":lname, 
        "email": email, 
        "age": age,
        "q1": q1,
        "q2": q2,
        "q3": q3,
        "q4": q4, 
        "q5": q5,
        "q6": q6, 
        "q7": q7,
        "q8": q8, 
        "q9": q9,
        "q10": q10,
        "q11": q11,
        "q12": q12   
        
    } 
db.collection('toMatch').insertOne(data,function(err, collection){ 
        if (err) throw err; 
        console.log("Record inserted Successfully"); 
              
    }); 
//     return res.redirect('laterpage.html'); 
     res.sendFile(__dirname + "/later_page.html");
}) 


}).listen(3000) 
  
//app.get('/',function(req,res){ 
//res.set({ 
//    'Access-control-Allow-Origin': '*'
//    }); 
//return res.redirect('index.html'); 
//}).listen(3000)
  
console.log("server listening at port 3000"); 
