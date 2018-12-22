const express = require('express');
const path = require('path');
const parser = require('body-parser');
const {getInfo} = require('../db/index.js')




const app = express();
app.use(parser.json());
app.use(parser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'../client/dist')))


app.get('/api/restaurant', (req,res)=>{
    getInfo((err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.status(200).send(data)
        }
    })
})

module.exports = app;