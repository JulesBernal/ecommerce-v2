const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql');

require("dotenv").config();
const app = express();
const SQL_PORT=process.env.SQL_PORT;
const SQL_PASSWORD=process.env.SQL_PASSWORD;

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    
})