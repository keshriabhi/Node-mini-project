const express = require('express');
require('./db/mongoose');

const User = require('./models/user');
const tasks = require('./models/tasks');
const { $where } = require('./models/user');

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.post('/users', (req,res)=>{
    // console.log(req.body);
    // res.send('Testing..!');

    // const user = new User({
    //     name : req.body.name,
    //     email : req.body.email,
    //     password : req.body.password,
    //     age : req.body.age
    // })

    const user = new User(req.body);

    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((error)=>{
        res.status(400).send(error);
    })
})

app.post('/tasks', (req,res)=>{
    const task = new tasks(req.body);
    task.save().then(()=>{
        res.status(201).send(task);
    }).catch((error)=>{
        res.status(400).send(error);
    })
})

app.get('/users', (req, res)=>{
    User.find({}).then((users)=>{
        res.status(200).send(users);
    }).catch((error)=>{
        res.status(500).send(error);
    })
})

//613a2d26ce29c70dd434051a
app.get('/users/:id', (req, res)=>{
    // console.log(req.params);
    const _id = req.params.id;

    User.findById(_id).then((user)=>{
        if(!user){
            return res.status(404).send();
        }
        res.status(200).send(user);

    }).catch((error)=>{
        res.status(400).send(error);
    })
})


app.get('/tasks', (req, res)=>{
    tasks.find({}).then((task)=>{
        res.status(200).send(task);
    }).catch((error)=>{
        res.status(500).send(error);
    })
})

//613a2d26ce29c70dd434051a
app.get('/tasks/:id', (req, res)=>{
    // console.log(req.params);
    const _id = req.params.id;

    tasks.findById(_id).then((task)=>{
        if(!task){
            return res.status(404).send();
        }
        res.status(200).send(task);

    }).catch((error)=>{
        res.status(400).send(error);
    })
})

app.listen(port, ()=>{
    console.log('Server is running on port '+port)
})
