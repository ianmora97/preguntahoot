const socket = io();

var totalTime = 5;
var totalTimePlay = 25;
var girarSound = new sound('sounds/fx/girarRuleta.wav');
var mostrarCategoria = new sound('sounds/fx/categoriasShow.wav');
var girarLift = new sound('sounds/fx/Lift.wav');
var countdown = new sound('sounds/fx/Countdown.wav');
var lobySound = new sound('https://www.youtube.com/watch?v=hnnUD9-hD8A');

var jugadores_array = [];
var preguntasRealizadas = [];
var actualQuestion;
var questionBrought;

var contadorJugadores = 0;

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.sound.muted = true;
    this.sound.muted = false;
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.muted = true;
        this.sound.muted = false;
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
    this.loop = function () {
        this.sound.loop = true;
        this.sound.play();
    }
}

function updateClock() {
    $('#reloj').text(totalTime);
    if (totalTime == 0) {
        $('#contadorPartida').hide();
        $('#ruletaGirarScreen').fadeIn();
        $('body').addClass('bg-primary');
        $('body').removeClass('bg-info');
    } else {
        countdown.play();
        totalTime -= 1;
        setTimeout("updateClock()", 1000);
    }
}
function girarRuleta() {
    socket.on('girar-ruleta-admin', function (data) {
        girarSound.play();
        girarLift.play();
        let randomNumber = data.categoria;
        if (randomNumber == 1) {
            console.log('Arte');
            $('#ruletaImg').addClass('girarRuleta-arte');
            setTimeout(() => {
                girarLift.stop();
                $('#ruletaImg').removeClass('girarRuleta-arte');
                $('#modalArte').modal('show');
                mostrarCategoria.play();
            }, 5000);
        }
        if (randomNumber == 2) {
            console.log('Ciencia');
            $('#ruletaImg').addClass('girarRuleta-ciencia');
            setTimeout(() => {
                girarLift.stop();
                $('#ruletaImg').removeClass('girarRuleta-ciencia');
                $('#modalCiencia').modal('show');
                mostrarCategoria.play();
            }, 5000);
        }
        if (randomNumber == 3) {
            console.log('Geografia');
            $('#ruletaImg').addClass('girarRuleta-geografia');
            setTimeout(() => {
                girarLift.stop();
                $('#ruletaImg').removeClass('girarRuleta-geografia');
                $('#modalGeografia').modal('show');
                mostrarCategoria.play();
            }, 5000);
        }
        if (randomNumber == 4) {
            console.log('Historia');
            $('#ruletaImg').addClass('girarRuleta-historia');
            setTimeout(() => {
                girarLift.stop();
                $('#ruletaImg').removeClass('girarRuleta-historia');
                $('#modalHistoria').modal('show');
                mostrarCategoria.play();
            }, 5000);
        }
        if (randomNumber == 5) {
            console.log('Entretenimiento');
            $('#ruletaImg').addClass('girarRuleta-entretenimiento');
            setTimeout(() => {
                girarLift.stop();
                $('#ruletaImg').removeClass('girarRuleta-entretenimiento');
                $('#modalEntretenimiento').modal('show');
                mostrarCategoria.play();
            }, 5000);
        }
        if (randomNumber == 6) {
            console.log('Deportes');
            $('#ruletaImg').addClass('girarRuleta-deportes');
            setTimeout(() => {
                girarLift.stop();
                $('#ruletaImg').removeClass('girarRuleta-deportes');
                $('#modalDeportes').modal('show');
                mostrarCategoria.play();
            }, 5000);
        }
        setTimeout(() => {
            var correct = toCorrectCategoria(randomNumber);
            showPreguntas(correct);
        }, 7000);
    });
}
function toCorrectCategoria(rand) {
    switch (rand) {
        case 1:
            return rand;
        case 2:
            return rand;
        case 3:
            return 5;
        case 4:
            return 6;
        case 5:
            return 4;
        case 6:
            return 3;
    }
}

function showPreguntas(cat) {
    socket.on('send-client-question', function (data) {
        var pregunta = data;
        preguntasRealizadas.push(pregunta);
        $('.modal').modal('hide');
        $('#ruletaGirarScreen').hide();
        $('#juegoScreen').fadeIn();
        $('body').addClass('bg-white');
        $('body').removeClass('bg-primary');
        mostrarCategoriaAgregar(cat);
    
        actualQuestion = pregunta.correcta;
        $('#preguntaTexto').text(pregunta.texto);
        $('#resA').data('a', pregunta.r_a);
        $('#resB').data('b', pregunta.r_b);
        $('#resC').data('c', pregunta.r_c);
        $('#resD').data('d', pregunta.r_d);
    
        $('#r_a').text(pregunta.r_a);
        $('#r_b').text(pregunta.r_b);
        $('#r_c').text(pregunta.r_c);
        $('#r_d').text(pregunta.r_d);
    
        $('#resA').addClass('animate__bounceIn');
        $('#resB').addClass('animate__bounceIn');
        $('#resC').addClass('animate__bounceIn');
        $('#resD').addClass('animate__bounceIn');
        contadorPartida(); 
    });
}

function mostrarCategoriaAgregar(categoria) {
    if (categoria == 1) {
        $('#lineaDetalle').css('background-color', 'red');
        $('#categoriaNombre').text('Arte');
        $("#badgeCategoria").html(
            '<i class="fas fa-paint-brush" style="font-size:1.8em;color:#a60202;"></i>'
        );
    }
    if (categoria == 2) {
        $('#lineaDetalle').css('background-color', '#28a745');
        $('#categoriaNombre').text('Ciencia');
        $("#badgeCategoria").html(
            '<i class="fas fa-flask" style="font-size:1.8em;color:#017b1d;"></i>'
        );
    }
    if (categoria == 3) {
        $('#lineaDetalle').css('background-color', '#fd7e14');
        $('#categoriaNombre').text('Deportes');
        $("#badgeCategoria").html(
            '<i class="fas fa-football-ball" style="font-size:1.8em;color:#b05000;"></i>'
        );
    }
    if (categoria == 4) {
        $('#lineaDetalle').css('background-color', '#e83e8c');
        $('#categoriaNombre').text('Entretenimiento');
        $("#badgeCategoria").html(
            '<i class="fas fa-film" style="font-size:1.8em;color:#b00051;"></i>'
        );
    }
    if (categoria == 5) {
        $('#lineaDetalle').css('background-color', '#007bff');
        $('#categoriaNombre').text('Geografia');
        $("#badgeCategoria").html(
            '<i class="fas fa-globe-americas" style="font-size:1.8em;color:#014b99;"></i>'
        );
    }
    if (categoria == 6) {
        $('#lineaDetalle').css('background-color', '#f6de00');
        $('#categoriaNombre').text('Historia');
        $("#badgeCategoria").html(
            '<i class="fas fa-book" style="font-size:1.8em;color:#827502;"></i>'
        );
    }
}
function intToCategoria(categoria) {
    switch (categoria) {
        case 1:
            return 'Arte';
        case 2:
            return 'Ciencia';
        case 3:
            return 'Deportes';
        case 4:
            return 'Entretenimiento';
        case 5:
            return 'Geografia';
        case 6:
            return 'Historia';
    }
}
function contadorPartida() {
    $('#tiempoRestante').text(totalTimePlay+'s');
    if (totalTimePlay == 0 || todosContestaron()) {
        totalTimePlay == 25;
    } else {
        totalTimePlay -= 1;
        setTimeout("contadorPartida()", 1000);
    }
}
function todosContestaron(){

}
function loaded(event) {
    events(event);
    updateClock();
    girarRuleta();
    lobySound.play();
}

function events(event) {
    getUsuariosEnSala();
}
function getUsuariosEnSala() {
    socket.emit('get-usuarios-client','refresh');
    socket.on('get-usuarios-client', function (data) {
        var usuarios = data;
        if (usuarios.length != 0) {
            for (var i = 0; i < usuarios.length; i++) {
                jugadores_array.push(usuarios[i]);
            }
        }
    });
}


document.addEventListener("DOMContentLoaded", loaded);