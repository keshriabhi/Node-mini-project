//CRUD operations

const { ObjectID } = require('bson');
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';

const databaseName = 'task-manager';

mongoClient.connect(connectionURL, {useNewUrlParser : true}, (error, client)=>{
    if(error){
        return console.log('Unable to connect to the database');
    }
    const db = client.db(databaseName);
    //console.log('Connection Successful');

    // db.collection('users').insertOne({
        //     name : 'Abhishek Keshri',
        //     place : 'Bangalore'
        // }, (error, result)=>{
    //     if(error){
    //         return console.log('There was an error inserting the document');
    //     }
    //     console.log(result);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name : 'Raushan',
    //         place : 'Bihar'
    //     },
    //     {
    //         name : 'Priya',
    //         place : 'Haryana'
    //     }
    // ], (error, result)=>{
    //     if(error)
    //         return console.log('Unable to insert in collection')
    //     console.log(result.ops);
    // })

    // db.collection('task').insertMany([
    //     {
    //         name : 'ab1',
    //         place : 'blr',
    //         age : '25'
    //     },{
    //         name : 'ab2',
    //         place : 'ccu',
    //         age : '26'
    //     },{
    //         name : 'ab3',
    //         place : 'del',
    //         age : '27'
    //     }
    // ], (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert in the new collection')
    //     }
    //     console.log('Insertion Successful');
    //     console.log(result.insertedCount);
    // })

    // db.collection('users').findOne({ _id : new ObjectID('61399bb27195897c56647b53')}, (error, user)=>{
    //     if(error){
    //         return console.log('Unable to find the entry');
    //     }
    //     console.log(user);
    // })

    // db.collection('users').updateOne({
    //     _id : new ObjectID('61399c5bfe444e27a58b18fb')
    // },{
    //     $set : {
    //         name : 'Rohit',
    //         place : 'New Delhi'
    //     }
    // }).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    // db.collection('users').updateMany({
    //     //_id : new ObjectID('61399bb27195897c56647b52')
    //     place  : 'Bihar'
    // },{
    //     $set : {
    //         place : 'Patna'
    //     }
    // }
    // ).then((result)=>{
    //     console.log(result.modifiedCount);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    // db.collection('users').deleteMany({
    //     name : 'Priya'
    // }).then((result)=>{
    //     console.log(result.deletedCount);
    // }).catch((err)=>{
    //     console.log(error);
    // })

    // db.collection('users').deleteOne({
    //     name : 'Raushan'
    // }).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })
    
})