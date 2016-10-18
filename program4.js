var fs = require('fs');																		
																									
fs.readFile(process.argv[2], 'utf8', function (error, data) 
{
	if(error)								//Si hay un error, lo imprime
		console.log(error);
		
	var str = data;
	var text = str.split('\n');
	console.log(text.length - 1);
	
});

/* Por Node
var fs = require('fs')  
var file = process.argv[2]  
 
fs.readFile(file, function (err, contents) {  
 if (err) {  
   return console.log(err)  
 }  
 // fs.readFile(file, 'utf8', callback) también se puede utilizar  
 var lines = contents.toString().split('\n').length - 1  
 console.log(lines)  
})
*/
