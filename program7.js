var http = require('http');

http.get(process.argv[2], function (response)
{
	response.setEncoding('utf8');				//Define como se leeran los bits obtenidos
	response.on('data', function (data)
	{
		console.log(data);
	});
	
	response.on('error', function (error)
	{
		console.log(error);
	});
});

/* Solucion de Node
var http = require('http')  
       
http.get(process.argv[2], function (response) 
{  
 response.setEncoding('utf8')  
 response.on('data', console.log)  
 response.on('error', console.error)  
}).on('error', console.error)
*/
