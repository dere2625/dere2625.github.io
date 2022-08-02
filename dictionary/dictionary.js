const express = require('express')
const data = require('./word')
const single = require('./word')
var url = require('url')
const app = express();
const port = 8081


app.get('/words', (req,res)=>{
    var urlcomponents = url.parse(req.url)
    var query = urlcomponents.query;
    data._test(query,(rows) =>{
        res.send(rows);
    });
})

app.get('/words/find', (req,res)=>{
    var urlcomponents = url.parse(req.url)
    var query = urlcomponents.query;
    single._findOne(query,(rows) =>{
        res.send(rows);
    });
})

app.listen(port,()=>{
    console.log(`Dictionary application running on port ${port}`);
})
