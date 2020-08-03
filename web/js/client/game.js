const socket = io();
function loaded(event) {
    events(event);
}

function events(event) {
    begin();
    recibir();
}
function begin(){
    $('#play').on('click',function(){
        socket.emit('comenzar-juego','begin');
        location.href = "play";
    });
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
  