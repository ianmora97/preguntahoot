<?php
session_start();
$con = mysqli_connect("localhost","ianmo","root","preguntados");
if(!$con){
	die("No se ha podido conectar a la base de datos");
}
$username = $_POST['username'];
$clave = $_POST['clave'];
$consulta = "SELECT * from usuario WHERE username = \"$username\" AND clave = \"$clave\"";
if($result = mysqli_query($con,$consulta)){
	if($data = mysqli_fetch_row($result)){
		if($data[4] == 2){
			// establish session variables
			$_SESSION['user'] = $username;
			$_SESSION['nombre'] = $data[2];
			echo "Success";
			exit;
		}
		else{
			echo "NoAccess";
			exit;
		}
	}
	echo "NotFound";
	exit;
}
echo "BadRequest";
exit;
mysqli_close($con);
?>