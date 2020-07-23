const socket = io();
var usuarioAnfitrion = {};

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
  crearPartidaUsuarioAnfitrion();
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
            $('#entrarPartidaOpenModalKey').attr('disabled',false);
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
      $('#entrarPartidaOpenModalKey').attr('disabled',true);
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
    usuarioAnfitrion = usuario;
    $.ajax({
        type: "POST",
        url: "/usuarios/login",
        data: JSON.stringify(usuario),
        contentType: "application/json"
    }).then((response) => {
      if(response == "Success"){
          $('#iniciarSesion').modal('hide');
          $('#opcionesNuevaPartida').append(
            '<button class="btn btn-warning" data-toggle="modal" data-target="#createKeyGameModal" id="crearPartidaBoton">'+
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
  $("#entrarPartidaOpenModalKey").click(function () {
    var token = $('#codigoSpan').text();
    $('#tokenEntrarPartida').val(token);
    var to =$('#tokenEntrarPartida').val();
    console.log(to);
  });
  // $("#ingresarBotonKeyPartidaEnter").click(function () {
  //   var to = $('#codigoSpan').text();
  //   var usuario;
  //   var check = $('#nombreInvitadoKey').val();
  //   if(check == ""){ //hizo login
  //     var usu = $('#userUnirseLogin').val();
  //     var cla = $('#claveUnirseLogin').val();
  //     usuario = {
  //       username:usu,
  //       clave:cla,
  //       token:to
  //     };
  //   }else{ // entra como invitado
  //     usuario = {
  //       username:check,
  //       token:to
  //     };
  //   }
  //   $.ajax({
  //       type: "POST",
  //       url: "/keyGameUnirseAPartida",
  //       data: JSON.stringify(usuario),
  //       contentType: "application/json"
  //   }).then((response) => {
  //     if(response == "Success"){
          
  //     }
  //     if(response == "NotFound"){
          
  //     }
  //   }, (error) => {
  //   });
  //  });
}


function crearPartidaUsuarioAnfitrion() {
  $('#registrarBotonKeyGame').click(function () {
    var to = $('#tokenCreate').val();
    var tok = {
      token:to,
      usuario: usuarioAnfitrion
    };
    console.log(tok);
    $.ajax({
        type: "POST",
        url: "/crearPartidaKeyGame",
        data: JSON.stringify(tok),
        contentType: "application/json"
    }).then((response) => {
      if(response == "Success"){
          $('#openModalLogin').hide();
          $('#openModalRegister').hide();
          $('#crearPartidaBoton').hide();
          $('#opcionesNuevaPartida').append(
            '<a href="/game" class="btn btn-success mx-auto w-50 text-white">'+
            'Jugar'+
            '</a>'
          );
      }
      if(response == "error"){
          
      }
    }, (error) => {
    });
   });
}
document.addEventListener("DOMContentLoaded", loaded);