const express=require ('express')
const mysql = require('mysql')
const cors = require('cors')

const app =express();
app.use(express.json())
app.use(cors());

require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});


app.post('/login',(req,res)=>{
    const sql = "select * from login where email = ? AND password = ?";
    //const sql = "INSERT INTO login (email,password) VALUE (?,?)";
    /*const values=[
        req.body.email,
        req.body.password
    ]*/
    db.query(sql,[req.body.email,req.body.password],(err,data)=>{
        if(err) return res.json("error");
        if(data.length>0){
            return res.json(data)
        }else{
            return res.json("no record")
        }
    })
})
app.listen(8080,()=>{
    console.log("listening...");
})