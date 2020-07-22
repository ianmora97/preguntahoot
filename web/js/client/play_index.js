const socket = io();

function loaded(event) {
  events(event);
}

function events(event) {
  iniciarSession();
  infoGuest();
  openCardPartidaNueva();
  openCardKeyPartida();
  registrarse();
  entrarPartidaAfterKey();
}
function infoGuest() {
  $(function () {
    $('[data-toggle="popover"]').popover();
  });
}
function openCardPartidaNueva() {
  $("#nuevaPartida").click(function () {
    $("#cardnuevapartida").fadeToggle();
  });
}
function ocultarCards() {
  $("#pills-home-tab").click(function () {});
}
function openCardKeyPartida() {
  $("#inputKey").keyup(function () {
    var valor = $("#inputKey").val();
    var llave = { token: valor };
    $("#codigoSpan").text(valor);
    if (valor.length === 6) {
      $.ajax({
        type: "POST",
        url: "/checkKeyGame",
        data: JSON.stringify(llave),
        contentType: "application/json",
      }).then(
        (response) => {
          if (response == 'Success') {
            $("#codigoSpan").removeClass("text-danger");
            $("#codigoSpan").addClass("text-success");
          }
          else{
            $("#keyExist").text(" no existe");
          }
        },
        (error) => {
          
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
function iniciarSession() {
  $("#entrarButon").click(function () {
    var usu = $("#user").val();
    var cla = $("#clave").val();
    var usuario = {
      username:usu,
      clave:cla
    };
    $.ajax({
        type: "POST",
        url: "/usuarios/login",
        data: JSON.stringify(usuario),
        contentType: "application/json"
    }).then((response) => {
      if(response == "Success"){
          $('#iniciarSesion').modal('hide');
          $('#opcionesNuevaPartida').append(
            '<button class="btn btn-warning" id="crearPartidaBoton">'+
            'Crear Partida'+
            '</button>'
          );
          $('#openModalRegister').attr("disabled", true);
      }
      if(response == "NotFound"){
          $('#helpIfFail').append(
          '<small class="text-danger">Usuario no se encuentra</small>'
          );
      }
    }, (error) => {
    });
  });
}
function registrarse() {
  $("#registrarBoton").click(function () {
    var nom = $('#nombreRegistrar').val();
    var usu = $("#usernameRegistrar").val();
    var cla = $("#claveRegistrar").val();
    var usuario = {
      nombre:nom,
      username:usu,
      clave:cla
    };
    $.ajax({
        type: "POST",
        url: "/registrarse",
        data: JSON.stringify(usuario),
        contentType: "application/json"
    }).then((response) => {
      if(response == "Success"){
          $('#registrarse').modal('hide');
          $('#opcionesNuevaPartida').append(
            '<button class="btn btn-warning text-white" id="crearPartidaBoton">'+
            'Crear'+
            '</button>'
          );
          $('#openModalLogin').attr("disabled", true);
      }
      if(response == "NotInserted"){
          $('#helpIfFailRegister').prepend(
          '<small class="text-danger">El usuario ya se encuentra registrado</small>'
          );
      }
    }, (error) => {
    });
  });
}
function entrarPartidaAfterKey() {
  $("#ingresarBotonKeyPartidaEnter").click(function () {
    var to = $('#codigoSpan').text();
    var usuario;
    var check = $('#nombreInvitadoKey').val();
    if(check == ""){ //hizo login
      var usu = $('#userUnirseLogin').val();
      var cla = $('#claveUnirseLogin').val();
      usuario = {
        username:usu,
        clave:cla,
        token:to
      };
    }else{ // entra como invitado
      usuario = {
        username:check,
        token:to
      };
    }
    $.ajax({
        type: "POST",
        url: "/keyGameUnirseAPartida",
        data: JSON.stringify(usuario),
        contentType: "application/json"
    }).then((response) => {
      if(response == "Success"){
          
      }
      if(response == "NotFound"){
          
      }
    }, (error) => {
    });
   });
}
document.addEventListener("DOMContentLoaded", loaded);
