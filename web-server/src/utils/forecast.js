const request = require('request');


const forecast = (lat, long, callback) =>{
    const URL = `http://api.weatherstack.com/current?access_key=91e0f748cd2513dedd9adb536727d0fd&query=${lat},${long}`;
 
    request({url : URL, json: true}, (error, {body}) =>{
        if(error){
            callback('Unable to connect with geocode services', undefined);
        }else if(body.error){
            callback('Unable to fetch')
        }else{
            callback(undefined, 'It is '+body.current.weather_descriptions[0] + '. It is currently '+body.current.temperature+' degree out.');
        }
    })
}


module.exports = forecast;