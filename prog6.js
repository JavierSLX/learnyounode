var path = require('path');
var fs = require('fs');

function filtro (ruta, ext, callback)
{
	var archivos = [];
	
	fs.readdir(ruta,function(error,data) 
	{
		if (error)
			return callback(error);
		else
		{
			data.forEach(function (file)
			{
				if (path.extname(file) == '.' + ext)
					archivos.push(file);

			});
			
		return callback (null, archivos);
		}
	});
}

module.exports = filtro;
