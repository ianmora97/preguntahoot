function loaded(event) {
  events(event);
}

function events(event) {
  //getUsuario();
}

/*function getUsuario() {
  $.ajax({
    type: "POST",
    url: "api/dash/getuser",
    contentType: "application/json",
  }).then(
    (us) => {
      console.log(us);
      $("#nombreParam").text(us.nombre);
      $("#usernameParam").text(us.username);
    },
    (error) => {
      alert(error.status);
    }
  );
}*/
document.addEventListener("DOMContentLoaded", loaded);
