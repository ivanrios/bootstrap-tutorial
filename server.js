var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(3000);
console.log("Listo, entra a http://localhost:3000/www/landing.html");