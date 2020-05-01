const clinet_mongodb = require('mongodb').MongoClient;
const connection_url = "mongodb://localhost:27017"

const client_db = new clinet_mongodb(connection_url);

client_db.connect(function(err,res){
 if(err) throw err;
 const dbo = client_db.db('mydb');
 const collection  = dbo.collection('customer');

 //sort name descending order
 const sortDesc = {name:-1}
 //sort names ascending order
 const sortAsc = {name: 1}
 collection.find().sort(sortAsc).toArray(function(err,res){
     if(err) throw err
     console.log(res)
     client_db.close();
 })
});