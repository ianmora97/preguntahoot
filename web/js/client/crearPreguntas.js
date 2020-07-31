function loaded(event) {
  events(event);
}

function events(event) {
  mostrarCategoriaAgregar();
  agregarPregunta();
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
      '<i class="fas fa-book" style="color:yellow;"></i>'
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
    var pregunta = {
      texto: o_texto,
      respuestaA: o_resA,
      respuestaB: o_resB,
      respuestaC: o_resC,
      respuestaD: o_resD,
      correcta: o_correcta,
      idCategoria: categoria,
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
      url: "addPregunta",
      data: JSON.stringify(pregunta),
      contentType: "application/json",
    }).then( (response) => {
        // $("#notificaciones").append(
        //   '<li class="menu-item">' +
        //     '<a href="#" class="menu-link"' +
        //     'data-original-title="" title="">' +
        //     '<div class="menu-item-meta"><b>Pregunta</b><br>Se agrego una pregunta</div>' +
        //     '<span class="small menu-item-meta text-muted" data-original-title=""' +
        //     'title=""> ' +
        //     hora +
        //     "</span>" +
        //     "</a>" +
        //     "</li>" +
        //     '<li class="divider"></li>'
        // );

        // $("#notificacionesToast").html("");
        // $("#notificacionesToast").append(
        //   '<div class="toast fade" data-delay="5000" id="newToast" role="alert" aria-live="assertive" aria-atomic="true">' +
        //     '<div class="toast-header bg-light">' +
        //     '<strong class="mr-auto"><i class="fas fa-question-circle text-white bg-success p-1 rounded"></i> Pregunta a&ntilde;adida correctamente</strong>' +
        //     '<small class="text-muted text-white">just now</small>' +
        //     '<button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">' +
        //     '<span aria-hidden="true">&times;</span>' +
        //     "</button>" +
        //     "</div>" +
        //     '<div class="toast-body">' +
        //     +o_texto +
        //     "</div>" +
        //     "</div>"
        // );
        // $(".toast").toast("show");
        // $("#badgeCategoria").fadeOut();
        // $("#texto").val("");
        // $("#resA").val("");
        // $("#resB").val("");
        // $("#resC").val("");
        // $("#resD").val("");
        if(response == "Success"){
          console.log('Pregunta Insertada');
        }
      },
      (error) => {
        
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