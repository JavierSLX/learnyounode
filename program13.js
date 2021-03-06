var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res)
{
  	res.writeHead(200,{'Content-Type': 'application/json'});

  	var parse = url.parse(req.url, true);
  	var date = new Date(parse.query.iso);

  	switch(parse.pathname)
  	{
    	case '/api/parsetime':
      	res.end(JSON.stringify(
      	{
      		hour: date.getHours(),
      		minute: date.getMinutes(),
      		second: date.getSeconds()
    		}));
    	break;
    	case '/api/unixtime':
      	res.end(JSON.stringify(
      	{
      		unixtime : date.getTime()
    		}));
    	break;
    	default:
      	res.end(JSON.stringify(
      	{
      		error: "404 route not found"
    		}));
  }
});

server.listen(process.argv[2]);
