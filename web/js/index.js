function loaded(event){
    events(event);
}

function events(event){
 
}
function playSound(filename){
    var mp3Source = '<source src="sounds/pop-click.mp3" type="audio/mpeg">';
    var embedSource = '<embed hidden="true" autostart="true" loop="false" src="sounds/pop-click.mp3">';
    $('#play').append('<audio autoplay="autoplay">' + mp3Source + embedSource + '</audio>');
}
document.addEventListener("DOMContentLoaded", loaded);