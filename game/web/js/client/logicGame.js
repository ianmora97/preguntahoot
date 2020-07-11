var vec_usuarios = [];
var partida;

function loaded(event) {
    events(event);
}

function events(event) {
    getUsuarios();
}


document.addEventListener("DOMContentLoaded", loaded);