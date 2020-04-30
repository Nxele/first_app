var mongo_client = require('mongodb').MongoClient;
var connection_url = "mongodb://localhost:27017/mydb"

mongo_client.connect(connection_url,function(erro,db){
 if(erro) throw erro;
 console.log("Database created")
 db.close();
})