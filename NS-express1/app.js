const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.get('/', (req, res)=>{
    console.log('GET REQUEST');
    fs.createReadStream('index.html', 'utf-8').pipe(res);

})

app.post('/', (res, req)=>{
    console.log('POST REQUEST');
    //fs.createReadStream('index.html', 'utf-8').pipe(res);

})

app.listen(3000, ()=>{
    console.log('Server is listening at 3000');
})