function loaded(event) {
    events(event);
}

function events(event) {
    getUsuario();
    getKeyGame();
}
function getUsuario() {
    $.ajax({
      type: "POST",
      url: "api/inGame/getuser",
      contentType: "application/json",
    }).then(
      (us) => {
          console.log(us);
        $("#anfitrion").text(us.nombre);
      },
      (error) => {
        alert(error.status);
      }
    );
  }
function getKeyGame() {
    $.ajax({
        type: "POST",
        url: "api/inGame/getKeyGame",
        contentType: "application/json"
    }).then((key) => {
        console.log(key);
        $("#keyGame").text(key.clave);
    },(error) => {
        
    }
    );
}
function crearPartida() {
    $("#keyGame").click(function () {
        $.ajax({
            type: "POST",
            url: "api/dash/loginCrear",
            data: JSON.stringify(usuario),
            contentType: "application/json"
        }).then(
                (usuario) => {
            location.href = "game.html";
        },
                (error) => {
            alert(error.status);
        }
        );

    });
}
document.addEventListener("DOMContentLoaded", loaded);
  