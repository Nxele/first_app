const client_mongo = require('mongodb').MongoClient;
const connection_url = "mongodb://localhost:27017"

const client = new client_mongo(connection_url);
client.connect(function(err,res){
    if(err) throw err;
    const dbo = client.db('mydb');
    const collection =dbo.collection('customer');

    //findOne display the first row/documents in the collection
    collection.findOne({},function(err,res){
        if(err) throw err;
        console.log(res)
        client.close()
    })

    //find() display all record/documents in the collection
    collection.find({}).toArray(function(err,res){
        if(err) throw err;
        console.log(res)
        client.close();
    })

    //find selected field from the /collection
    collection.find({},{projection:{_id:0,name:1,Age:1,age:1}}).toArray(function(err,res){
        console.log(res)
        client.close()
    })
})
