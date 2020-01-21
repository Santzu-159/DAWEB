var http = require('http'); //acceso al modulo http para poder crear el servidor

http.createServer(function (req, res) { //se ejecutará cuando alguien intente acceder a la computadora en el puerto 8080
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

