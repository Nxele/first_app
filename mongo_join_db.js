const client_mongodb = require('mongodb').MongoClient;
const connection_url = "mongodb://localhost:27017";

const client_db = new client_mongodb(connection_url);
client_db.connect(function(err,res){
    if(err) throw err;
    const dbo = client_db.db('mydb');
    const collection = dbo.collection('car');

    collection.aggregate([
        {
            $lookup:{
                from: 'customer',
                localField: 'name',
                foreignField: 'name',
                as: 'customer_cars'
            }
        }
    ]).toArray(function(err,res){
        if(err) throw err;
        console.log(JSON.stringify(res))
        client_db.close()
    })
})