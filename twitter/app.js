const express = require('express');

const app = express();
// const route = express().route;



//

app.get('/', (req, res)=>{
    console.log(req.params);
    res.send({
        name : 'Abhishek'
    });
    //res.send()
})

app.listen(3000, ()=>{
    console.log('Server is running at 3000');
})
