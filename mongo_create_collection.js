var mongo_client = require('mongodb').MongoClient; //mongoDB module
var connection_url = "mongodb://localhost:27017"; //connection string

mongo_client.connect(connection_url,function(err,db){  //connect to the db function 
    if(err) throw erro;
    var db = db.db('mydb'); //create a database
    db.createCollection('customer',function(erro,res){ //function for creating a collection/table
        if(err) throw err;
        console.log("collection created")
        db.close()
    })
})