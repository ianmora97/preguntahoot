function loaded(event) {
  events(event);
}

function events(event) {
  getUsuario();
  cargarPreguntas();
  mostrarCategoriaAgregar();
  agregarPregunta();
  reloadPreguntasList();
}
function getUsuario() {
  $.ajax({
    type: "POST",
    url: "api/dash/getuser",
    contentType: "application/json",
  }).then(
    (us) => {
      $("#nombreParam").text(us.nombre);
      $("#usernameParam").text(us.username);
    },
    (error) => {
      alert(error.status);
    }
  );
}
function reloadPreguntasList() {
  $("#nav-home-tab").click(function () {
    cargarPreguntas();
  });
}
function cargarPreguntas() {
  $(document).ready(function () {
    $.ajax({
      type: "POST",
      url: "api/dash/getPreguntas",
      contentType: "application/json",
    }).then(
      (preguntas) => {
        fillListPreguntas(preguntas);
      },
      (error) => {
        alert(error.status);
      }
    );
  });
}
function fillListPreguntas(preguntas) {
  $("#listaPreguntas").html("");
  preguntas.forEach((or) => {
    fillPregunta(or);
  });
}
function fillPregunta(pregunta) {
  var texto = pregunta.texto;
  var id = pregunta.idPregunta;
  var res_a = pregunta.respuestaA;
  var res_b = pregunta.respuestaB;
  var res_c = pregunta.respuestaC;
  var res_d = pregunta.respuestaD;
  var categoria = pregunta.idCategoria.nombre;
  var logo = evaluarCategoria(categoria);
  var correcta = pregunta.correcta;

  $("#listaPreguntas").append(
    "<tr>" +
      '<td class="list-action">' +
      '<div class="custom-control custom-checkbox">' +
      '<input type="checkbox" id="checkbox-' +
      id +
      '" class="custom-control-input" value="' +
      id +
      '" name="checked[]"/>' +
      '<label class="custom-control-label" for="checkbox-' +
      id +
      '">&nbsp;</label></div></td>' +
      '<td class="list-action ">' +
      '<a  class="btn-action btn btn-edit" data-original-title="" title="">' +
      '<i class="fa fa-pencil"></i>' +
      "</a>" +
      "</td>" +
      '<td class="list-col-index-2 list-col-name-id list-col-type-text id="' +
      id +
      'selectid">' +
      id +
      "</td>" +
      '<td class="list-col-index-3 list-col-name-texto list-col-type-text ">' +
      texto +
      "</td>" +
      '<td class="list-col-index-3 list-col-name-a list-col-type-text ">' +
      res_a +
      "</td>" +
      '<td class="list-col-index-3 list-col-name-b list-col-type-text ">' +
      res_b +
      "</td>" +
      '<td class="list-col-index-3 list-col-name-c list-col-type-text ">' +
      res_c +
      "</td>" +
      '<td class="list-col-index-3 list-col-name-d list-col-type-text ">' +
      res_d +
      "</td>" +
      '<td class="list-col-index-3 list-col-name-categoria list-col-type-text ">' +
      logo +
      " " +
      categoria +
      "</td>" +
      '<td class="list-col-index-3 list-col-name-correcta list-col-type-text ">' +
      correcta +
      "</td>"
  );
}
function evaluarCategoria(categoria) {
  switch (categoria) {
    case "Arte":
      return '<i class="fas fa-paint-brush" style="color:red;"></i>';
    case "Ciencia":
      return '<i class="fas fa-flask" style="color:#28a745;"></i>';
    case "Deportes":
      return '<i class="fas fa-football-ball" style="color:#fd7e14;"></i>';
    case "Entretenimiento":
      return '<i class="fas fa-film" style="color:#e83e8c;"></i>';
    case "Geografia":
      return '<i class="fas fa-globe-americas" style="color:#007bff;"></i>';
    case "Historia":
      return '<img src="images/history.png" alt="historia" width="20px">';
  }
}

function mostrarCategoriaAgregar() {
  $("#ca1").click(function () {
    $("#badgeCategoria").fadeIn();
    $("#badgeCategoria").text(" Arte");
    $("#badgeCategoria").prepend(
      '<i class="fas fa-paint-brush" style="color:red;"></i>'
    );
  });
  $("#ca2").click(function () {
    $("#badgeCategoria").fadeIn();
    $("#badgeCategoria").text(" Ciencia");
    $("#badgeCategoria").prepend(
      '<i class="fas fa-flask" style="color:#28a745;"></i>'
    );
  });
  $("#ca3").click(function () {
    $("#badgeCategoria").fadeIn();
    $("#badgeCategoria").text(" Deportes");
    $("#badgeCategoria").prepend(
      '<i class="fas fa-football-ball" style="color:#fd7e14;"></i>'
    );
  });
  $("#ca4").click(function () {
    $("#badgeCategoria").fadeIn();
    $("#badgeCategoria").text(" Entretenimiento");
    $("#badgeCategoria").prepend(
      '<i class="fas fa-film" style="color:#e83e8c;"></i>'
    );
  });
  $("#ca5").click(function () {
    $("#badgeCategoria").fadeIn();
    $("#badgeCategoria").text(" Geografia");
    $("#badgeCategoria").prepend(
      '<i class="fas fa-globe-americas" style="color:#007bff;"></i>'
    );
  });
  $("#ca6").click(function () {
    $("#badgeCategoria").fadeIn();
    $("#badgeCategoria").text(" Historia");
    $("#badgeCategoria").prepend(
      '<img src="images/history.png" alt="historia" width="20px">'
    );
  });
}
function categoriaToInt(categoria) {
  switch (categoria) {
    case "Arte":
      return 1;
    case "Ciencia":
      return 2;
    case "Deportes":
      return 3;
    case "Entretenimiento":
      return 4;
    case "Geografia":
      return 5;
    case "Historia":
      return 6;
  }
}
var notificaciones = [];
function agregarPregunta() {
  $("#agregar").click(function () {
    var categoria = $("#badgeCategoria").text();
    categoria = categoria.replace(/ /g, "");
    categoria = categoriaToInt(categoria);
    var o_texto = $("#texto").val();
    var o_resA = $("#resA").val();
    var o_resB = $("#resB").val();
    var o_resC = $("#resC").val();
    var o_resD = $("#resD").val();
    var OpSelected = $("[name*=respuestaCorrecta]");

    var o_correcta;
    for (let i = 0; i < OpSelected.length; i++) {
      if (OpSelected[i].checked) {
        o_correcta = OpSelected[i].value;
      }
    }
    var cat = { idCategoria: categoria };
    var pregunta = {
      texto: o_texto,
      respuestaA: o_resA,
      respuestaB: o_resB,
      respuestaC: o_resC,
      respuestaD: o_resD,
      correcta: o_correcta,
      idCategoria: cat,
    };
    var date = new Date();

    var minutes = date.getMinutes();
    var hour = date.getHours();

    var hora = hour + ":" + minutes;
    var notificacion = {
      fecha: hora,
      titulo: "Pregunta",
      texto: "Se agrego una pregunta",
    };
    notificaciones.push(notificacion);
    $.ajax({
      type: "POST",
      url: "api/dash/addPregunta",
      data: JSON.stringify(pregunta),
      contentType: "application/json",
    }).then(
      () => {
        $("#notificaciones").append(
          '<li class="menu-item">' +
            '<a href="#" class="menu-link"' +
            'data-original-title="" title="">' +
            '<div class="menu-item-meta"><b>Pregunta</b><br>Se agrego una pregunta</div>' +
            '<span class="small menu-item-meta text-muted" data-original-title=""' +
            'title=""> ' +
            hora +
            "</span>" +
            "</a>" +
            "</li>" +
            '<li class="divider"></li>'
        );

        $("#notificacionesToast").html("");
        $("#notificacionesToast").append(
          '<div class="toast fade" data-delay="5000" id="newToast" role="alert" aria-live="assertive" aria-atomic="true">' +
            '<div class="toast-header bg-light">' +
            '<strong class="mr-auto"><i class="fas fa-question-circle text-white bg-success p-1 rounded"></i> Pregunta a&ntilde;adida correctamente</strong>' +
            '<small class="text-muted text-white">just now</small>' +
            '<button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span>' +
            "</button>" +
            "</div>" +
            '<div class="toast-body">' +
            +o_texto +
            "</div>" +
            "</div>"
        );
        $(".toast").toast("show");
        $("#badgeCategoria").fadeOut();
        $("#texto").val("");
        $("#resA").val("");
        $("#resB").val("");
        $("#resC").val("");
        $("#resD").val("");
      },
      (error) => {
        alert(error.status);
      }
    );
  });
}
function correctaRadio(i) {
  switch (i) {
    case 'a':
      $("#resA").css("box-shadow", "0 0 0 0.2rem #61b55d");
      $("#resB").css("box-shadow", "none");
      $("#resC").css("box-shadow", "none");
      $("#resD").css("box-shadow", "none");
      break;
    case 'b':
      $("#resB").css("box-shadow", "0 0 0 0.2rem #61b55d");
      $("#resA").css("box-shadow", "none");
      $("#resC").css("box-shadow", "none");
      $("#resD").css("box-shadow", "none");
      break;
    case 'c':
      $("#resC").css("box-shadow", "0 0 0 0.2rem #61b55d");
      $("#resB").css("box-shadow", "none");
      $("#resA").css("box-shadow", "none");
      $("#resD").css("box-shadow", "none");
     break;
    case 'd':
      $("#resD").css("box-shadow", "0 0 0 0.2rem #61b55d");
      $("#resB").css("box-shadow", "none");
      $("#resC").css("box-shadow", "none");
      $("#resA").css("box-shadow", "none");
      break;
  }
}
document.addEventListener("DOMContentLoaded", loaded);
