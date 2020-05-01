const client_mongo = require('mongodb').MongoClient;
const connection_url = "mongodb://localhost:27017"

const client = new client_mongo(connection_url);
client.connect(function(err,res){
    if(err) throw err;
    const dbo = client.db('mydb');
    const collection =dbo.collection('customer');

    //findOne display the first row in the collection
    collection.findOne({},function(err,res){
        if(err) throw err;
        console.log(res)
        client.close()
    })
})
