function loaded(event) {
  events(event);
}

function events(event) {
  mostrarCategoriaAgregar();
  agregarPregunta();
  checkKeyPressedOnInputs();
  ocultarPops();
  $('#modalInstrucciones').modal();

  $('[data-popname="respuestaCorrectaPop"]').tooltip({
    trigger: 'manual',
    offset: '40px 2px'
  });
  $('[data-toggle="tooltip"]').tooltip('show');
}
function ocultarPops(){

}
function cerrarAlerta() {
  $("#alertaAgregarPregunta").fadeOut();
}
function mostrarCategoriaAgregar() {
  $("#ca1").click(function () {
    $("#categoria-error").hide();
    $("#badgeCategoria").fadeIn();
    $("#badgeCategoria").text(" Arte");
    $("#badgeCategoria").prepend(
      '<i class="fas fa-paint-brush" style="color:red;"></i>'
    );
  });
  $("#ca2").click(function () {
    $("#categoria-error").hide();
    $("#badgeCategoria").fadeIn();
    $("#badgeCategoria").text(" Ciencia");
    $("#badgeCategoria").prepend(
      '<i class="fas fa-flask" style="color:#28a745;"></i>'
    );
  });
  $("#ca3").click(function () {
    $("#categoria-error").hide();
    $("#badgeCategoria").fadeIn();
    $("#badgeCategoria").text(" Deportes");
    $("#badgeCategoria").prepend(
      '<i class="fas fa-football-ball" style="color:#fd7e14;"></i>'
    );
  });
  $("#ca4").click(function () {
    $("#categoria-error").hide();
    $("#badgeCategoria").fadeIn();
    $("#badgeCategoria").text(" Entretenimiento");
    $("#badgeCategoria").prepend(
      '<i class="fas fa-film" style="color:#e83e8c;"></i>'
    );
  });
  $("#ca5").click(function () {
    $("#categoria-error").hide();
    $("#badgeCategoria").fadeIn();
    $("#badgeCategoria").text(" Geografia");
    $("#badgeCategoria").prepend(
      '<i class="fas fa-globe-americas" style="color:#007bff;"></i>'
    );
  });
  $("#ca6").click(function () {
    $("#categoria-error").hide();
    $("#badgeCategoria").fadeIn();
    $("#badgeCategoria").text(" Historia");
    $("#badgeCategoria").prepend(
      '<i class="fas fa-book" style="color:#f6de00;"></i>'
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
function validateForm() {
  var categoria = $("#badgeCategoria").text();
  categoria = categoria.replace(/ /g, "");
  var o_texto = $("#texto").val();
  var o_resA = $("#resA").val();
  var o_resB = $("#resB").val();
  var o_resC = $("#resC").val();
  var o_resD = $("#resD").val();

  var OpSelected = $("[name*=respuestaCorrecta]");

  var o_correcta = "";
  for (let i = 0; i < OpSelected.length; i++) {
    if (OpSelected[i].checked) {
      o_correcta = OpSelected[i].value;
    }
  }
  if (o_texto == "" || o_resA == "" || o_resB == "" || o_resC == "" || o_resD == "") { // la pregunta o respuestas estan vacias
    console.log('Respuestas Vacias');
    return false;
  }
  else if (categoria == "" || o_correcta == "") { //la categoria o la respuesta correcta estan vacias
    console.log('Respuestas Vacias');
    return false;
  }
  if(resAreEquals(o_resA,o_resB,o_resC,o_resD)){
    $('#respuestasIguales').show();
    return false;
  }
  console.log('Respuestas Llena');
  return true;
}
function resAreEquals(a,b,c,d){
  if(a != b && a != c && a != d){
    if(b != c && b != d){
      if(c != d){
        return false;
      }
    }
  }
  return true;
}
function agregarPregunta() {
  $("#agregar").click(function () {
    $('#blurFade,#loader').show();
    if (validateForm()) {
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
      $.ajax({
        type: "POST",
        url: "addPregunta",
        data: JSON.stringify(pregunta),
        contentType: "application/json",
      }).then((response) => {
        if (response == "Success") {
          $('#textoPregunta').html("");
          $('#textoPregunta').append(o_texto);
          $('#preguntaInsertadaModal').modal();
          $("#badgeCategoria").fadeOut();
          $("#texto").val("");
          $("#resA").val("");
          $("#resB").val("");
          $("#resC").val("");
          $("#resD").val("");
          uncheckCorrect();
          console.log('Pregunta Insertada');
        }
        if(response == "NotInserted"){
          $('#preguntaNoInsertadaModal').modal();
        }
      },
        (error) => {
          alert('Ocurrio un Error en el servidor');
        }
      );
    }
    else{
      showCheckErrorsEach();
    }
    $('#blurFade,#loader').hide();
  });
}
function checkKeyPressedOnInputs (){
  $("#text").keyup(function () {
    $('#texto-error').hide();
    $('#texto').css('box-shadow','none');
  });
  $("#resA").keyup(function () {
    $('#resA-error').hide();
    $('#resA').css('box-shadow','none');
    $('#respuestasIguales').hide();
  });
  $("#resB").keyup(function () {
    $('#resB-error').hide();
    $('#resB').css('box-shadow','none');
    $('#respuestasIguales').hide();
  });
  $("#resC").keyup(function () {
    $('#resC-error').hide();
    $('#resC').css('box-shadow','none');
    $('#respuestasIguales').hide();
  });
  $("#resD").keyup(function () {
    $('#resD-error').hide();
    $('#resD').css('box-shadow','none');
    $('#respuestasIguales').hide();
  });
}
function showCheckErrorsEach(){
  var categoria = $("#badgeCategoria").text();
  categoria = categoria.replace(/ /g, "");
  var o_texto = $("#texto").val();
  var o_resA = $("#resA").val();
  var o_resB = $("#resB").val();
  var o_resC = $("#resC").val();
  var o_resD = $("#resD").val();

  var OpSelected = $("[name*=respuestaCorrecta]");

  var o_correcta = "";
  for (let i = 0; i < OpSelected.length; i++) {
    if (OpSelected[i].checked) {
      o_correcta = OpSelected[i].value;
    }
  }
  if(o_texto == ""){
    $('#texto-error').show();
    $('#texto').css('box-shadow','0 0 0 0.2rem #f25d5d');
  }
  if(o_resA == ""){
    $('#resA-error').show();
    $('#resA').css('box-shadow','0 0 0 0.2rem #f25d5d');
  }
  if(o_resB == ""){
    $('#resB-error').show();
    $('#resB').css('box-shadow','0 0 0 0.2rem #f25d5d');
  }
  if(o_resC == ""){
    $('#resC-error').show();
    $('#resC').css('box-shadow','0 0 0 0.2rem #f25d5d');
  }
  if(o_resD == ""){
    $('#resD-error').show();
    $('#resD').css('box-shadow','0 0 0 0.2rem #f25d5d');
  }
  if(categoria == ""){
    $('#categoria-error').show();
  }
  if(o_correcta == ""){
    $('[data-popname="respuestaCorrectaPop"]').css('box-shadow','0 0 0 0.2rem #f25d5d');
  }
}
function uncheckCorrect() {
  $("#resA").css("box-shadow", "none");
  $("#resB").css("box-shadow", "none");
  $("#resC").css("box-shadow", "none");
  $("#resD").css("box-shadow", "none");
  var OpSelected = $("[name*=respuestaCorrecta]");
  for (let i = 0; i < OpSelected.length; i++) {
    if (OpSelected[i].checked) {
      OpSelected[i].checked = false;
    }
  }
}
function correctaRadio(i) {
  $('[name*=respuestaCorrecta]').css('box-shadow','none');
  $('[data-toggle="tooltip"]').tooltip('hide');
  $('[data-popname="respuestaCorrectaPop"]').css('box-shadow','none');
  $('[data-form="inputs"]').removeClass('mb-5');
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