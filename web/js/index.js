function loaded(event){
    events(event);
}

function events(event){
    play();
    verifyLogin();
}
function verifyLogin(){
    $("#ingresarButton").click(function(){
        $.ajax({
            type: "POST",
            url: "api/dash/getuser",
            contentType: "application/json"
        }).then((us) => {
            if(us.rol === 2){
                location.href = "dashboard.html";
            }
            else{
                location.href = " play_index.html";
            }
        },(error) => {
            location.href = "login.html";
        }
        );
    });
}
function play(){
    $("#play").click(function(){
        location.href = "play_index.html";
    });
}
function playSound(filename){
    var mp3Source = '<source src="sounds/pop-click.mp3" type="audio/mpeg">';
    var embedSource = '<embed hidden="true" autostart="true" loop="false" src="sounds/pop-click.mp3">';
    $('#play').append('<audio autoplay="autoplay">' + mp3Source + embedSource + '</audio>');
}
document.addEventListener("DOMContentLoaded", loaded);