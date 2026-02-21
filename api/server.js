const express=require ('express')
const mysql = require('mysql')
const cors = require('cors')

const app =express();
app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"nidhi@872614",
    database:"loginreact"
})

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