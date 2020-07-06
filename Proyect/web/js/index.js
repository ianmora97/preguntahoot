function loaded(event){
    events(event);
}

function events(event){
    play();
}

function play(){
    $("#jugar").click(function(){
        location.href = "client/play_index.html";
    });
}
document.addEventListener("DOMContentLoaded", loaded);