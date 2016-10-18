var fs = require('fs');							//Requerido para mandar llamar un archivo

buf = new Buffer(256);							//Crea un objeto tipo Buffer
buf = fs.readFileSync(process.argv[2]);	//Lee por argumento la ruta del archivo que va a analizar (sincrono)
var str = buf.toString();						//Convierte en cadena el archivo leido y lo guarda en un arreglo llamado str

var text = str.split('\n');					//Corta el arreglo en partes cada que encuentra una secuencia de escape
console.log(text.length - 1);					//Imprime las partes del arreglo - 1 para saber cuantas secuencias de escape encontro

/*
var fs = require('fs')  
       
var contents = fs.readFileSync(process.argv[2])  
var lines = contents.toString().split('\n').length - 1  
console.log(lines)  
*/
// note you can avoid the .toString() by passing 'utf8' as the  
// second argument to readFileSync, then you'll get a String!  
//  
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1 
