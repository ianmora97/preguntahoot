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
      url: "api/login",
      data: JSON.stringify(usuario),
      contentType: "application/json"
    }).then(
      (us) => {
        console.log(us);
        alert(us);
        location.href = "dashboard.html";
      },
      (error) => {
        alert(error.status);
      }
    );
  });
}
document.addEventListener("DOMContentLoaded", loaded);
