/*var suma = 0;

for (var i = 2; ; i++)
{
	if (isNaN(process.argv[i]) === true)
		break; 
	suma += Number(process.argv[i]);
}

console.log(suma);*/

var result = 0;  
       
for (var i = 2; i < process.argv.length; i++) 
{  
 result += Number(process.argv[i]);  
}  
 
console.log(result);  
