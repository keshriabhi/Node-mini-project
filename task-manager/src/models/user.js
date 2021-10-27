const mongoose = require('mongoose');
const validator = require('validator');


// mongoose.connect('mongodb://127.0.0.1:3000/user-api', {
//     useNewUrlParser : true,
//     //useCreateIndex : true
// })


const User = mongoose.model('User', { 
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        trim : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid, bro!')
            }
        }
    },
    password : {
        type : String,
        required : true,
        minlength : 7,
        trim : true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                 throw new Error('Password is not strong!')
            }
        }
    },
    age :{
        type : Number,
        default : 0,
        validate(value){
            if(value<0){
                throw new Error("Age cannot be negative")
            }
        }
    }
})

module.exports = User;