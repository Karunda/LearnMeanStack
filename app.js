/*var http = require("http");
http.createServer(function(request,response){
response.writeHead(200,{"Content-Type":"text/plain"});
response.write("Hello World");
response.end();

}).listen(3000);
*/

var express = require('express');
var app = express();
app.get('/',function(req,res){
     res.send(200,'Hello world');
    }
);

app.listen(8888);
