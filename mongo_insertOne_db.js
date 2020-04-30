//get mongoClient and assert
const mongo_client = require('mongodb').MongoClient;
const assert = require('assert')

//connection string
const connection_url = "mongodb://localhost:27017";

//initialize a database
const db_name = "mydb";

//create a new client
const db_client = new mongo_client(connection_url);

 db_client.connect(function(err){
    if(err) throw err;

    //link client and database
    const dbo = db_client.db(db_name);
    //link collection and database
    const collection = dbo.collection('customer');
    //create user
    const customer = {name:"Mxolisi",surname:"Nxele",age:32,address:"610 Nxamalala"}
    
    //insert user to the database
    collection.insertOne(customer,function(err,callback){
        if(err) throw err;
        db_client.close();
    })
 })