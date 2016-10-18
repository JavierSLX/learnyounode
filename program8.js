var concatStream = require('bl');
var http = require('http');
var url = process.argv[2];

http.get(url,function(response)
{
  	response.setEncoding('utf-8');
  	response.pipe(concatStream(function(data)
  	{
    	console.log(data.length);
    	console.log(data);
	}));
});