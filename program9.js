var concatStream = require('bl');
var http = require('http');

var results = [];
var count = 0;

urls.forEach(function(url,i)
{
  	http.get(url,function(response)
  	{
    	response.setEncoding('utf-8');
    	response.pipe(concatStream(function(data)
    	{
      	results[i] = data;
      	count++;

      	if(count === process.argv.slice(2).length)
      	{
        		results.forEach(function(result)
        		{
          		console.log(result);
        		});
      	}

    	}));
  	});
});
