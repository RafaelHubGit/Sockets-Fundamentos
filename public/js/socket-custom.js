
        var socket = io();

        // NOTA!! socket.on, los ON son para escuchar informacion del servidor

        // Saber que hay conexion con el servidor
        socket.on('connect', function(){
            console.log("Conectado al Servidor");
        });

        // Saber que ya no hay conexion con el servidor
        socket.on('disconnect', function(){
            // NOTA! : Esto puede servir para mostrarle al usuario alguna notificacion que diga que 
            //se ha perdido la conexion o algo asi 
            console.log("Perdimos conexion con el servidor");
        });


        // NOTA!! socket.emit, los EMIT son para enviar informacion al servidor
    
        socket.emit('enviarMensajeDelUsuario', {
            usuario: 'Rafael', 
            mensaje: 'Hola mundo'
        }, function( resp ){
            console.log("Respuesta Server", resp);
        });


        // Escuchar Informacion del servidor
        socket.on('enviarMensajeDelServidor', function (mensaje) {
            console.log("Servidor:", mensaje);
        });
