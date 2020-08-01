
var totalTime = 5;

function updateClock() {
    $('#reloj').text(totalTime);
    if (totalTime == 0) {
        $('#contadorPartida').hide();
        $('#ruletaGirarScreen').fadeIn();
        $('body').addClass('bg-white');
        $('body').removeClass('bg-info');
    } else {
        totalTime -= 1;
        setTimeout("updateClock()", 1000);
    }
}
function girarRuleta(){
    $('#girarboton').on('click',function(){
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        
        if(randomNumber == 1){
            console.log('Arte');
            $('#ruletaImg').addClass('girarRuleta-arte');
            setTimeout(() => {
                $('#ruletaImg').removeClass('girarRuleta-arte');
                $('#modalArte').modal('show');
            }, 5000);

        }
        if(randomNumber == 2){
            console.log('Ciencia');
            $('#ruletaImg').addClass('girarRuleta-ciencia');
            setTimeout(() => {
                $('#ruletaImg').removeClass('girarRuleta-ciencia');
                $('#modalCiencia').modal('show');
            }, 5000);
        }
        if(randomNumber == 3){
            console.log('Geografia');
            $('#ruletaImg').addClass('girarRuleta-geografia');
            setTimeout(() => {
                $('#ruletaImg').removeClass('girarRuleta-geografia');
                $('#modalGeografia').modal('show');
            }, 5000);
        }
        if(randomNumber == 4){
            console.log('Historia');
            $('#ruletaImg').addClass('girarRuleta-historia');
            setTimeout(() => {
                $('#ruletaImg').removeClass('girarRuleta-historia');
                $('#modalHistoria').modal('show');
            }, 5000);
        }
        if(randomNumber == 5){
            console.log('Entretenimiento');
            $('#ruletaImg').addClass('girarRuleta-entretenimiento');
            setTimeout(() => {
                $('#ruletaImg').removeClass('girarRuleta-entretenimiento');
                $('#modalEntretenimiento').modal('show');
            }, 5000);
        }
        if(randomNumber == 6){
            console.log('Deportes');
            $('#ruletaImg').addClass('girarRuleta-deportes');
            setTimeout(() => {
                $('#ruletaImg').removeClass('girarRuleta-deportes');
                $('#modalDeportes').modal('show');
            }, 5000);
        }
        
        
    });
}

function loaded(event) {
    events(event);
    updateClock();
    girarRuleta();
}

function events(event) {
}


document.addEventListener("DOMContentLoaded", loaded);