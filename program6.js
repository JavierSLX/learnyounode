var filtro = require('./prog6.js');

filtro(process.argv[2], process.argv[3], function (error, data)
{
	if(error)
		return console.log(error);
		
	data.forEach(function(element)
	{
		console.log(element);
	});
});

/* Solucion Node
_/usr/lib/node_modules/learnyounode/exercises/make_it_modular/solution/sol  
  ution.js_ :  
   
     var filterFn = require('./solution_filter.js')  
     var dir = process.argv[2]  
     var filterStr = process.argv[3]  
       
     filterFn(dir, filterStr, function (err, list) {  
       if (err) {  
         return console.error('There was an error:', err)  
       }  
       
       list.forEach(function (file) {  
         console.log(file)  
       })  
     })  
   
 ─────────────────────────────────────────────────────────────────────────────  
  _/usr/lib/node_modules/learnyounode/exercises/make_it_modular/solution/sol  
  ution_filter.js_ :  
   
     var fs = require('fs')  
     var path = require('path')  
       
     module.exports = function (dir, filterStr, callback) {  
       fs.readdir(dir, function (err, list) {  
         if (err) {  
           return callback(err)  
         }  
       
         list = list.filter(function (file) {  
           return path.extname(file) === '.' + filterStr  
         })  
       
         callback(null, list)  
       })  
     }  

*/
