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
    $("#jugar").click(function(){
        location.href = "play_index.html";
    });
}
document.addEventListener("DOMContentLoaded", loaded);