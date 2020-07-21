function loaded(event) {
  events(event);
}

function events(event) {
  crearPartida();
  infoGuest();
  openCardPartidaNueva();
  openCardKeyPartida();
}
function infoGuest() {
  $(function () {
    $('[data-toggle="popover"]').popover();
  });
}
function openCardPartidaNueva() {
  $("#nuevaPartida").click(function () {
    $("#cardnuevapartida").slideToggle();
  });
}
function ocultarCards() {
  $("#pills-home-tab").click(function () {});
}
function openCardKeyPartida() {
  $("#inputKey").keyup(function () {
    var valor = $("#inputKey").val();
    var llave = { clave: valor };
    $("#codigoSpan").text(valor);
    if (valor.length === 6) {
      $.ajax({
        type: "POST",
        url: "api/keyGame/getKey",
        data: JSON.stringify(llave),
        contentType: "application/json",
      }).then(
        (key) => {
          if (key != undefined) {
            $("#keyExist").text(" existe");
            $("#codigoSpan").removeClass("text-danger");
            $("#codigoSpan").addClass("text-success");
          }
          else{
            $("#keyExist").text(" no existe");
          }
        },
        (error) => {
          alert(error.status);
        }
      );
    }
    if (valor.length != 6) {
      $("#keyExist").text("");
      $("#codigoSpan").addClass("text-danger");
      $("#codigoSpan").removeClass("text-success");
    }
  });
  $("#inputKey").click(function () {
    $("#cardKeyPartida").show();
  });
}
function crearPartida() {
  $("#jugarCrear").click(function () {
    var usu = $("#user").val();
    var cla = $("#clave").val();
    var usuario = {
      username:usu,
      clave:cla
    };
    console.log(usuario);
    $.ajax({
      type: "POST",
      url: "api/initGame/loginCrear",
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
