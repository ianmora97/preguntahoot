const socket = io();

function loaded(event){
    sendAction();
    recibir();
}
function sendAction(){
    $('#mensaje').on('keydown',function (event){
        if(event.which == 13){
            var mensaje = $('#mensaje').val();
            var usuario = $('#username').val();
            console.log(usuario + " " + mensaje);
            socket.emit('chat:message',{
            message:  mensaje,
            username: usuario
            });
            $('#mensaje').val('');
        }
    });
}
function recibir(){
    socket.on('chat:messsage',function (data) {
        $('#output').append(
            '<p><strong>'+data.username+':</strong>&nbsp;'+data.message+'</p>'
            
        );
    });
}
document.addEventListener("DOMContentLoaded", loaded);