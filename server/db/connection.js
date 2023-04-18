const mysql=require("mysql");

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"earysystem",
    port:"3306"
});

connection.connect((err)=>{
    if(err)
        throw err;
    console.log("Connected to database successfully");
});


module.exports=connection;