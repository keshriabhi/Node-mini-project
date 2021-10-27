const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const publicDirectoryPath = path.join(__dirname,'../public');
const partialsPath = path.join(__dirname, '../partials');
const viewPath = path.join(__dirname, '../views');


app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirectoryPath))

app.get('', (req, res)=>{
    res.render('index',{
        title : 'Weather App',
        name : 'Abhishek'
    });
})

app.get('/about', (req, res)=>{
    res.render('about',{
        title : 'About App',
        name : 'Abhishek'
    });
})
app.get('/help', (req, res)=>{
    res.render('help',{
        title : 'Help App',
        name : 'Abhishek'
    });
})
// app.get('', (req, res)=>{
//     res.send('<h1>Hello! Express!</h1>')
// })

// app.get('/help', (req, res)=>{
//     res.send('You\'ll get help here!')
// })


// app.get('/about', (req, res)=>{
//     res.send('<a href="www.google.com">This is About page!</a>')
// })

app.get('/weather', (req, res)=>{
    if(!req.query.address){
        return res.send({
            error : 'You must provide an address!'
        })
    }
    geocode(req.query.address,(error, { lattitude, longitude, place_name }) =>{
        if(error){
            return res.send({error});
        }
        forecast(lattitude, longitude, (error, forecastData)=>{
            if(error){
                return res.send({
                    error
                })
            }
            res.send({
                forecast : forecastData,
                location : place_name,
                address : req.query.address
            })
        })
    })


    // res.send({
    //     location : req.query.address
    // })
})
//app.get('/products', (req, res)=>{
//     console.log(req.query.search);
//     if(!req.query.search){ //mandatory
//         return res.send({
//             error : 'You must provide a search term'
//         })
//     }
//     res.send({
//         products : []
//     })
// })


app.get('/help/*',(req, res)=>{
    res.render('errorPage',{
        title : 'It is an Error',
        name : 'Caused by Abhishek'
    })
})
app.get('*',(req, res)=>{
    res.render('errorPage',{
        title : 'It is an Error',
        name : 'Caused by Abhishek'
    })
})
app.listen(3000, ()=>{
    console.log('Server is listening at 3000');
})
