<?php
$con = mysqli_connect("localhost","ianmo","root","preguntados");
if(!$con){
	die("No se ha podido conectar a la base de datos");
}
$tabla = "";
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
		$tabla .= $row;
	}
}
mysqli_close($con);
echo $tabla;
?>