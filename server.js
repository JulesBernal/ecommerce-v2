const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql');
const PORT = process.env.PORT || 3000;
const path = require('path');
const cors = require('cors');

require("dotenv").config();
const app = express();
const SQL_PORT=process.env.SQL_PORT;
const SQL_PASSWORD=process.env.SQL_PASSWORD;

app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bodyParser.urlencoded({extended:true}));

const connection = mysql.createConnection({
    host: 'azathoth-db.cfbekwngw2iv.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'rdspassforaza',
    database: 'ecommerce'
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/shoplow',(req,res)=>{
    console.log('initial shop');
    connection.query('SELECT * FROM products',function(error,results,fields){
        if (error) throw error;
        console.log('request sent');
        res.send(results);
    })
})
app.post('/test/',(req,res)=>{
    let input="SELECT * FROM products";
    let where=`WHERE fruit_type=`;
    let order='ORDER BY price';
    if(req.body.typeFruit!='All'){
        input+=` ${where}'${req.body.typeFruit}'`;
    }
    if(req.body.sortOrder!='Featured'){
        input+=` ${order} ${req.body.sortOrder}`;
    }
     connection.query(`${input}`,function(error,results,fields){
        if (error) throw error;
        console.log(results);
        res.send(results)
    })
})
app.get('/shophigh',(req,res)=>{
    let input = "";
    if(req.body) {
        input+=req.body;
    }
    console.log('initial shop');
    connection.query(`SELECT * FROM products ORDER BY price DESC ${input}`,function(error,results,fields){
        if (error) throw error;
        console.log(results);
    })
})
app.listen(PORT,() =>{
    console.log(`Listening to port ${PORT}`);
});