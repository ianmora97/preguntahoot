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
function openCardKeyPartida() {
  $("#inputKey").keyup(function () {
    var valor = $("#inputKey").val();
    $("#codigoSpan").text(valor);
    if (valor.length === 6) {
      //--aqui la peticion a la base de datos
      $.ajax({
        type: "GET",
        url: "api/usuariosAdmin",
        contentType: "application/json",
      }).then(
        (usuario) => {
          console.log(usuario);
          $("#keyExist").text(" existe");
          $("#codigoSpan").removeClass("text-danger");
          $("#codigoSpan").addClass("text-success");
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
  $("#jugar").click(function () {
    $.ajax({
      type: "POST",
      url: "api/restaurante/categoriasAdmin",
      success: function (categorias) {
        showCategorias(categorias);
      },
      error: function (status) {
        alert(errorMessage(status));
      },
    });
  });
}
document.addEventListener("DOMContentLoaded", loaded);
