var mysql = require('mysql');
var userName = "";
var password = "";
let status = 400;

module.exports.setValues  = function setValues(uname,passwd){
    userName = uname;
    password = passwd;
}

module.exports.create = async function createConnection(){
    var connection = mysql.createConnection({
        host: "localhost",
        user : userName,
        password : password
    });
    await connection.connect((err)=>{
        if(err){
            status = 400;
            console.log(err);
        }
        else{
            console.log("Connected");
            status = 200;
        }
        console.log("status = ",status);
        return status;
    });
    
    
}


