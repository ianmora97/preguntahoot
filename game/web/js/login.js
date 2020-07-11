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
        url: "php/verifyLogin.php",
        data: usuario,
        async: true,
        success: function(response){
            if(response == "Success"){
                location.href = "dashboard.php";
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
        }
    });
  });
}
document.addEventListener("DOMContentLoaded", loaded);
