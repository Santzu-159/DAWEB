var http = require('http'); //acceso al modulo http para poder crear el servidor
var dt = require('./myfirstmodule'); //acceso al modulo que hemos creado en una página a parte

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);