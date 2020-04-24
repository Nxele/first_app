//importing important modules
var http = require('http');
var url = require('url');
var fs = require('fs');

//create the server
http.createServer(function(req,res){
    var q = url.parse(req.url,true); // get the url passed by the user
    var filename = "."+q.pathname; // store the user submitted url
    fs.readFile(filename,function(err,data){ //function for serving requested file
        if(err){ //if file not found display 404 error message
            res.writeHead(404,{'Content-Type':'text/html'})
            return res.end("404 page not found")
        }else{ //server the requested file to the user
            res.writeHead(200,{'Content-Type':'text/html'})
            return res.end(data)
        }
    })
}).listen(8080)
