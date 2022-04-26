//Llamamos el modulo http
const http = require('http');
//Establecemos la url o ip de nuestro servidor
const hostname = '192.168.50.187'//'127.0.0.1'
//Establecemos el puerto de escucha
const port = 3000;
//Creamos una instancia http con un reques y un response
const server = http.createServer((req, res) => {
    //El servidor responderá un codigo 200
    res.statusCode = 200;
    //El servidor responderá con un texto plano
    res.setHeader('Content-Type', 'text/plain');
    //El servidor responderá el mensaje Hola Mundo
    res.end('Hola Mundo');
});

server.listen(port, hostname, () => {
    console.log('El servidor se está ejecutando en http: ${hostname}:${port}');
});