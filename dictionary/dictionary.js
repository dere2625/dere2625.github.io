const express = require('express')
const data = require('./word')
const single = require('./word')
const cors = require('cors')
var url = require('url')
const app = express();
const port = 8081

app.use(cors({
    origin : 'http://127.0.0.1:5500'
}))


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
