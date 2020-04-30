const mongo_client = require('mongodb').MongoClient;
const connection_url = "mongodb://localhost:27017"
const db_client = new mongo_client(connection_url);

db_client.connect(function(err,callback){
    const dbo = db_client.db("mydb");
    const collection = dbo.collection("customer");
    const users = [{name:"Gugu",surname:"Nxele",Age:20},{name:"Sisanda",surname:"Nxele",Age:10}];

    collection.insertMany(users,function(err,res){
        if(err) throw err;
        console.log(res)
        db_client.close();
    })
})
