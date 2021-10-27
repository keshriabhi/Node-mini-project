const request = require('request');


const geoCode = (place, callback) =>{
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1Ijoia2VzaHJpYWJoaSIsImEiOiJja3Q4eWZ3eTgxNzBqMm9sYTF4aDU5ODd6In0.nxhSN-dLh8NqnPU2VGkAzA`;

    request({url : url, json: true}, (error, {body}) =>{
        if(error){
            callback('Unable to connect with geocode services', undefined);
        }else{
            callback(undefined, {
                lattitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                place_name : body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode;