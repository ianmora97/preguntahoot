<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>All tables</title>
	<!-- Latest compiled and minified CSS -->
  	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
 	 <!--Jquery CDN-->
  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!--JS de BootStrap-->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"
    integrity="sha384-1CmrxMRARb6aLqgBO7yyAxTOQE2AKb9GfXnEo760AUcUmFx3ibVJJAzGytlQcNXd"
    crossorigin="anonymous"></script>
    <link rel="shortcut icon" type="image/x-icon" href="https://www.preguntados.com/compiled/img/ruleta.png">
</head>
<body>
	<div class="container-fluid">
		<div class="row">
			<div class="col-lg-4">
				<h1>Usuarios</h1>
				<table class="table table-bordered table-xl">
				  <thead class="thead-dark">
				    <tr>
				      <th scope="col">ID</th>
				      <th scope="col">Username</th>
				      <th scope="col">Nombre</th>
				      <th scope="col">Clave</th>
				      <th scope="col">Rol</th>
				    </tr>
				  </thead>
				  <tbody id="listaUsuarios">
				    
				  </tbody>
				</table>
			</div>
		</div>
	</div>
</body>
</html>
<script>
	function loaded(event) {
  		$.ajax({
            type: "POST",
            url: 'selectUsers.php',
            async: true,
            data: {prueba:1,ejemplo:2},
            success: function(response){
                $("#listaUsuarios").append(response);
           	},
           	error: function(error){
           		console.log(error);
           	}
       });
	}

	document.addEventListener("DOMContentLoaded", loaded);
</script>