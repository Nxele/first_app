const client_mongo = require('mongodb').MongoClient;
const connection_url = "mongodb://localhost:27017";

const client_db = new client_mongo(connection_url);

client_db.connect(function(err,res){
    if(err)throw err;
    const dbo = client_db.db('mydb');
    const collection  = dbo.collection('customer');

    //updade one document
    const queryUpdate = {name:"Sizwe"};
    const updateValue = {$set:{address:"245 badsen avenue pretoria centurion Die Hoewes"}}
    collection.updateOne(queryUpdate,updateValue,function(err,res){
        console.log(res)
        client_db.close();
    })

    //update many records
    const updateQuery = {age:25};
    const valueUpdate = {$set:{age:26}}
    
    collection.updateMany(updateQuery,valueUpdate,function(err,res){
        console.log(res);
        client_db.close();
    })
})