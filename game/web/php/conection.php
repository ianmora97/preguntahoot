<?php
$con = mysqli_connect("localhost","ianmo","root");
if(!$con){
	die("No se ha podido conectar a la base de datos");
}
mysqli_close($con);
?>