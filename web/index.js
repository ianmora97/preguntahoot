const path      = require('path');
const express   = require('express');
const app       = express();
const session   = require('express-session');
const flash     = require('connect-flash');

//ArreglosUsuarios
usuarios_juego =[];

//settings
app.set('port',process.env.PORT || 80);
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

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

//static files
app.use(express.static(path.join(__dirname)))

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