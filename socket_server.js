const Express = require('express');
const Io = require('socket.io');
const app = Express();
const path = require('path');



// set server

app.set('port', process.env.PORT || 5000);
app.use(Express.static(path.join(__dirname+'/publicFl')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/publicFl/index.html'));
});

const server = app.listen(app.get('port'),()=>{
    console.log('listening on port: ',app.get('port'))
});

//WebSockets
const socketIo = Io(server);  

socketIo.on('connection',(socket)=>{

    console.log('a user connected', socket.id);
    // la emite el cliente en WebApp

    socket.on('disconnect', ()=>{ // la senal se activa cuando un usuario se desconecta
        console.log("user disconnected");
    });

    socket.on('led_inicial',(senal) => { // se activa cuando el usuario en la pag web emite una senal con nombre led_inicial
        console.log(senal);
        socket.broadcast.emit('led_inicial',senal);
    });

    // La emite el arduino al cliente
    socket.on('arduinoOutput',(senal) => { // 
        //console.log(JSON.parse(senal));
        socketIo.emit('arduinoOutput',senal);
    });     
    

});






