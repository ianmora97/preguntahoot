const path      = require('path');
const express   = require('express');
const app       = express();
const session   = require('express-session');
const flash     = require('connect-flash');

//Variables Globales
token = {};
usuarioAnfitrion = {};
usuarios_juego =[];

//settings
app.set('port',process.env.PORT || 80); //creo el puerto del servidor
app.set('views',path.join(__dirname,'views')); //creo el path de las views
app.set('view engine', 'ejs'); //preparo el motor para lectura de .ejs

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(session({
    secret: "abcdqwerty1234",
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

//Routes
app.use(require('./routes/routes'));
app.use(require('./routes/usuarios'));
app.use(require('./routes/keyGame'));
app.use(require('./routes/createQ'));

//static files
app.use(express.static(path.join(__dirname)))

//start the server
const server = app.listen(app.get('port'), () =>{
    console.log('[NODE] server on port ', app.get('port'));
});

//webSockets
const SocketIo = require('socket.io');
const io = SocketIo(server);

io.on('connection', (socket) =>{
    console.log('[SOCKET] new connection', socket.id);

    socket.on('unirse-partida', (data) => {
        io.sockets.emit('unirse-partida',usuarios_juego);
    });
    socket.on('get-usuarios', (data) => {
        io.sockets.emit('get-usuarios',usuarios_juego);
    });
});