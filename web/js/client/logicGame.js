const socket = io();

var totalTime = 5;
var girarSound = new sound('sounds/fx/girarRuleta.wav');
var mostrarCategoria = new sound('sounds/fx/categoriasShow.wav');
var girarLift = new sound('sounds/fx/Lift.wav');
var countdown = new sound('sounds/fx/Countdown.wav');
var lobySound = new sound('https://www.youtube.com/watch?v=hnnUD9-hD8A');

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
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
        totalTime -= 1;
        setTimeout("updateClock()", 1000);
    }
}
function girarRuleta() {
    $('#girarboton').on('click', function () {
        girarSound.play();
        girarLift.play();
        let randomNumber = Math.floor(Math.random() * 6) + 1;
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


    });
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
function getUsuariosEnSala(){
    socket.emit('get-usuarios','refresh');
    socket.on('get-usuarios',function (data) {
        console.log(data);
        var usuarios = data;
        if(usuarios.length != 0){
            for(var i=0;i<usuarios.length;i++){
                $('#usuariosEnSala').append(
                    '<li class="list-group-item">'+
                    '<i class="fa fa-user text-secondary"></i> <span>'+usuarios[i].username+'</span>'+
                    '<span class="badge badge-primary badge-pill" data-points="0" data-player="'+usuarios[i].username+'">0</span>'+
                    '</li>'
                );
            }
        }
    });
}


document.addEventListener("DOMContentLoaded", loaded);