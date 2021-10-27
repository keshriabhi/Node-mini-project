const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/user-api', {
    useNewUrlParser : true,
    //useCreateIndex : true
})

// const abhi = new User({ 
//     name : "Abhishek",
//     email : 'abhishek@live.com',
//     password : '23jkjdaa',
//     // age : 25 
// });

// abhi.save().then((result)=>{
//     console.log(result);
//     console.log('-------------');
//     console.log(abhi)
// }).catch((error)=>{
//     console.log(error);
// })


// const t1 = new tasks({
//     desc : 'Finishing MongoDB',
//     // completed : false
// })
// t1.save().then(()=>{
//     console.log(t1);
// }).catch((err)=>{
//     console.log(err);
// })