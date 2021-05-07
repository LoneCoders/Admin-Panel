var express = require("express");
var login = require("./login");
var app = express();

app.use(express.urlencoded({
    extended: true
  }))
  
app.use(express.static(__dirname + '/public'));
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/public/src/login.html');
});
app.post('/login',async (req,res)=>{
    console.log(req.body.uname,req.body.passwd);
    login.setValues(req.body.uname,req.body.passwd);
    var status = await login.create();
    if(status == 200){
        res.redirect('/homepage');
    }
    else{
        res.write("Connection error :(");
    }
    res.end();
});

app.get('/homepage',(req,res)=>{
    res.write("homepage");
    res.end();
});
app.listen(8000);