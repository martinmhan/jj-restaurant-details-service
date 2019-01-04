const express = require('express');
const path = require('path');
const parser = require('body-parser');
const { getInfo } = require('../db/index.js');
const cors = require("cors");

const app = express();


app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'../client/dist')))


app.get('/api/restaurant', (req,res)=>{
    console.log('req.query, ',req.query.id)
    getInfo(req.query.id,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.status(200).send(data)
        }
    })
})





module.exports = app;