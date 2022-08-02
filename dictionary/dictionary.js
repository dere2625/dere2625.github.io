const express = require('express')
const app = express();
const port = 8081

app.get('/words', (req,res)=>{
    res.send('hello')
})

app.listen(port,()=>{
    console.log(`Dictionary application running on port ${port}`);
})
