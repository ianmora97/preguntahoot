function loaded(event) {
  events(event);
}

function events(event) {
  entrar();
}

function entrar() {
  $("#entrarButon").click(function () {
    var usu = $("#user").val();
    var cla = $("#clave").val();
    var usuario = {
      username:usu,
      clave:cla
    };
    $.ajax({
        type: "POST",
        url: "/usuarios",
        data: JSON.stringify(usuario),
        contentType: "application/json"
    }).then((response) => {
      if(response == "Success"){
        location.href = "dashboard.html";
      }
      if(response == "NoAccess"){
          alert("No tiene acceso!")
      }
      if(response == "NotFound"){
          alert("No se encontro el usuario "+usuario.username)
      }
      if(response == "BadRequest"){
          console.log("Query no se ejecuto");
      }
    }, (error) => {
    });
  });
}
document.addEventListener("DOMContentLoaded", loaded);
