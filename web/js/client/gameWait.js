const socket = io();
var me;
function loaded(event) {
    events(event);
}

function events(event) {
    recibir();
    unirsePartida();
    comenzarPartida();
}
function comenzarPartida(){
    socket.on('comenzar-juego',function (data) {
        location.href = "playClient";
    });
}
function unirsePartida(){
    var name = $('#nombreUsuarioNuevo').text();
    socket.emit('unirse-partida',{
        usuario:name
    });
    me = name;
}
function reloadUsers(){
    socket.emit('get-usuarios','refresh');
    socket.on('get-usuarios',function (data) {
    });
    reloadUsers(2000);
}
function recibir(){
    socket.on('unirse-partida',function (data) {
        console.log(data);
        $('#usuariosNuevos').html('');
        var usuarios = data;
        for(var i=0;i<usuarios.length;i++){
            $('#usuariosNuevos').append(
                '<i class="fa fa-user text-secondary"></i> <span>'+usuarios[i].username+'</span>'+
                '<div class="dropdown-divider"></div>'
            );
        }
        
    });
}
document.addEventListener("DOMContentLoaded", loaded);
  