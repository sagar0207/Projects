var http = require('http');
var archive = require('fs');
var path = require('path');

var server = http.createServer(function(req, res){
  var filePath = req.url;
  if (filePath == '/' )
  filePath = 'html/index.html';

  filePath = __dirname+filePath;
  var extname = path.extname(filePath);
  var contentType  = 'text/html';

  switch (extname){
    case '.js':
    contentType = 'text/javascript';
    break;
    case '.css':
    contentType = 'text/css';
    break;
  }

archive.exists(filePath, function(exists){
  if(exists) {
    archive.readFile(filePath, function(error, content) {
      if(error){
        res.writeHead(500);
        res.end();
      }
      else {
        res.writeHead(200,{'Content-Type': contentType});
        res.end(content, 'utf-8');
      }
    });
  }
 });
});

server.listen(3000, function (){
  console.log('Working!');
});
