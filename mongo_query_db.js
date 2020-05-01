const client_mongodb = require('mongodb').MongoClient;
const connection_url = "mongodb://localhost:27017";

const client_db = new client_mongodb(connection_url);

client_db.connect(function(err,res){
    if(err) throw err;
    const dbo = client_db.db('mydb');
    const collection = dbo.collection('customer');

    //Find documents where the name starts with the letter "S":
    const findUsers = {name:/^S/}

    //query a specific data 
    const findUser = {name:"Sizwe"}
    collection.find(findUsers).toArray(function(err,res){
        if(err) throw err;
        console.log(res);
        client_db.close();
    });
});