const path = require('path');
const express = require('express');
const app = express();

//settings
app.set('port',process.env.PORT || 3000);

//static files
app.use(express.static(path.join(__dirname, 'public')))

//start the server
const server = app.listen(app.get('port'), () =>{
    console.log('[OK] server on port ', app.get('port'));
});

//webSockets
const SocketIo = require('socket.io');
const io = SocketIo(server);

io.on('connection', (socket) =>{
    console.log('[OK] new connection', socket.id);

    socket.on('chat:message', (data) => {
        io.sockets.emit('chat:messsage',data);
    });

});