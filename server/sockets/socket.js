
//Se importa io de server
const { io } = require('../server');

// Para saber cuando un usuario se connecta al server
//Nota, el objeto client tiene toda la informacion de la computadora 
//o del objeto que se conecto 
io.on('connection', (client) => {

    console.log("Usuario Conectado", client.id);

    // NOTA!! emit, los EMIT son para enviar informacion al cliente
    client.emit('enviarMensajeDelServidor', {
        usuario: "Administrador", 
        mensaje: "Bienvenido a esta App"
    });



    // Saber cuando un usuario se desconecta
    client.on('disconnect', () => {
        console.log("Usuario desconectado");
    });


    //Escuchar al cliente 
    // NOTA!! on, los ON son para escuchar informacion del cliente
    // client.on('FuncionMandadaPorElCliente', (objetoQueRecibe) => {})
    client.on('enviarMensajeDelUsuario', (data, callback) => {
        
        console.log(data);

        client.broadcast.emit('enviarMensajeDelServidor', data);

        // if( mensaje.usuario ){
        //     callback({
        //         resp: 'Todo Salio Bien'
        //     });
        // }else{
            
        //     callback({
        //         resp: 'Todo Salio Mal!!!!'
        //     });
        // }

    });


});