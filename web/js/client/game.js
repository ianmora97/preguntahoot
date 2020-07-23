const socket = io();
function loaded(event) {
    events(event);
}

function events(event) {
    //getUsuario();
    //getKeyGame();
    recibir();
}
function crearPartida() {
    $("#keyGame").click(function () {
        $.ajax({
            type: "POST",
            url: "api/dash/loginCrear",
            data: JSON.stringify(usuario),
            contentType: "application/json"
        }).then(
                (usuario) => {
            location.href = "game.html";
        },
                (error) => {
            alert(error.status);
        }
        );

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
  