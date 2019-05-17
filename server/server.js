const express = require('express');

//Se carga la libreria de sockets
const socketIO = require('socket.io');

//Un servidor que ya trae por defecto node
//SocketIo no trabaja directamente con express
const http = require('http');

const path = require('path');

const app = express();

//Se monta el servidor 
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));


//IO = esta es la comunicacion del backend
//module.exports.io es para exportar el io y utilizarlo en socket
module.exports.io = socketIO(server);

// Importamos el archivo socket para ser utilizado
require('./sockets/socket');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);
});
