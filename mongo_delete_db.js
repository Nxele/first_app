const client_mongodb = require('mongodb').MongoClient;
const connection_url = "mongodb://localhost:27017";

const client_db = new client_mongodb(connection_url);

client_db.connect(function(err,res){
    if(err) throw err;
    const dbo = client_db.db('mydb');
    const collection = dbo.collection('customer');

    

    //delete a specific record in the document
    const deleteUser = {name:"Gugu"}
    collection.deleteOne(deleteUser,function(err,res){
        if(err) throw err;
        console.log(res)
        client_db.close()
    })

    //delete all user that their names start with Z
    const deleteUsers = {name:"/^Z/"}
    collection.deleteMany(deleteUsers,function(err,res){
        console.log(res);
        client_db.close();
    })
})