var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (error, data)			//Acepta un directorio y una funcion callback
{
	if (error)
		return console.log(error);
		
	for (var i = 0; i < data.length; i++)
	{
		if (path.extname(data[i]) == '.' + process.argv[3])					//Funcion que regresa la extension de un archivo
			console.log(data[i]);
	}

});

/* Solucion de Node
var fs = require('fs')  
var path = require('path')  
 
var folder = process.argv[2]  
var ext = '.' + process.argv[3]  
 
fs.readdir(folder, function (err, files) 
{  
	if (err) 
		return console.error(err)  
		
 	files.forEach(function (file) 							//Ciclo for por cada elemento del arreglo
 	{  
   	if (path.extname(file) === ext) 
   	{  
     		console.log(file)  
   	}  
 	})  
}) 
