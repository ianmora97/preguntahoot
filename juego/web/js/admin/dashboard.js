function loaded(event) {
    events(event);
}

function events(event) {
    getUsuario();
}

function getUsuario() {
    //$("#asd").click(function () {
        $.ajax({
            type: "POST",
            url: "api/initGame/getuser",
            contentType: "application/json"
        }).then(
                (us) => {
            console.log(us);
            $("#nombreParam").text(us.nombre);
            $("#usernameParam").text(us.username);
        },
                (error) => {
            alert(error.status);
        }
        );
    //});
}
document.addEventListener("DOMContentLoaded", loaded);