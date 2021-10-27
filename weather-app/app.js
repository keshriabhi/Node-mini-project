const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const chalk = require('chalk');

const place = process.argv[2];

if(!place){
    return console.log(chalk.red.inverse('Please provide a valid location'));
}
//location -> lat and long
geocode(place,(error, {lattitude, longitude, place_name}={})=>{
    if(error){
        console.log('Error -> '+error)
    }else{
        // console.log('Lat = '+data.lattitude);
        // console.log('Long = '+data.longitude);
        // console.log('Place = '+data.place_name);
        forecast(lattitude, longitude, (error, forcastData)=>{
            if(error){
                console.log('error ',error);
            }else{
                console.log(place_name)
                console.log(forcastData);
            }
        })
    }
})

//lat/long -> weather

// forecast(-44.6284, -75.7888, (error, data)=>{
//     if(error){
//         console.log('error ',error);
//     }else{
//         console.log(data);
//     }
// })