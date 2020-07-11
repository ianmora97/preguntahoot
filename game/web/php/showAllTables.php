<?php
$con = mysqli_connect("localhost","ianmo","root","preguntados");
if(!$con){
	die("No se ha podido conectar a la base de datos");
}
?>
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
				  <tbody>
				    <?php
				    $consulta = "select * from usuario";
				    if($result = mysqli_query($con,$consulta)){
				    	while($fila = mysqli_fetch_row($result)){
				    		$row = "
							<tr>
							  <td>".$fila[0]."</td>
						      <td>".$fila[1]."</td>
						      <td>".$fila[2]."</td>
						      <td>".$fila[3]."</td>
						      <td>".$fila[4]."</td>
						    </tr>
				    		";
				    		echo $row;
				    	}
				    }
				    ?>
				  </tbody>
				</table>
			</div>
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
				  <tbody>
				    <?php
				    $consulta = "select * from usuario";
				    if($result = mysqli_query($con,$consulta)){
				    	while($fila = mysqli_fetch_row($result)){
				    		$row = "
							<tr>
							  <td>".$fila[0]."</td>
						      <td>".$fila[1]."</td>
						      <td>".$fila[2]."</td>
						      <td>".$fila[3]."</td>
						      <td>".$fila[4]."</td>
						    </tr>
				    		";
				    		echo $row;
				    	}
				    }
				    ?>
				  </tbody>
				</table>
			</div>
		</div>
	</div>
</body>
</html>
<?php 
mysqli_close($con);
 ?>