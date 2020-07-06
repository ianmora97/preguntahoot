function loaded(event){
    events(event);
}

function events(event){
    crearPartida();
}

function crearPartida(){
    $("#jugar").click(function(){
        $.ajax({
            type: "POST",
            url: "api/restaurante/categoriasAdmin",
            success: function (categorias) {
                showCategorias(categorias);
            },
            error: function (status) {
                alert(errorMessage(status));
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", loaded);