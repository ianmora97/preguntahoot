
var pantallaContador = 1;

function loaded(event) {
    events(event);
}

function events(event) {
    cambiarPantalla();
}
function toggleScreen(scren){

}
function cambiarPantalla(){
    $('#cambiar').on('click',function(){
        switch(pantallaContador){
            case 1:
                $('#obtenerPreguntasScreen').show();
                $('#juegosScreen').hide();
                $('#resultadosScreen').hide();
                break;
            case 2:
                $('#obtenerPreguntasScreen').hide();
                $('#juegosScreen').show();
                $('#resultadosScreen').hide();
                break;
            case 3:
                $('#obtenerPreguntasScreen').hide();
                $('#juegosScreen').hide();
                $('#resultadosScreen').show();
                break;
        }
        pantallaContador++;
        if(pantallaContador == 4){
            pantallaContador = 1;
        }
    });
}

document.addEventListener("DOMContentLoaded", loaded);