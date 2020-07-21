<?php
$con = mysqli_connect("localhost","ianmo","root","preguntados");
if(!$con){
	die("No se ha podido conectar a la base de datos");
}
$tabla = "";
$consulta = "select * from pregunta";
if($result = mysqli_query($con,$consulta)){
	while($fila = mysqli_fetch_row($result)){
		$logo = "";
		$catText = "";
		switch ($fila[6]) {
		    case 1:
		      $logo = '<i class="fas fa-paint-brush" style="color:red;"></i>';
		      $catText = "Arte";
		      break;
		    case 2:
		      $logo = '<i class="fas fa-flask" style="color:#28a745;"></i>';
		      $catText = "Ciencia";
		      break;
		    case 3:
		      $logo = '<i class="fas fa-football-ball" style="color:#fd7e14;"></i>';
		      $catText = "Deportes";
		      break;
		    case 4:
		      $logo = '<i class="fas fa-film" style="color:#e83e8c;"></i>';
		      $catText = "Entretenimiento";
		      break;
		    case 5:
		      $logo = '<i class="fas fa-globe-americas" style="color:#007bff;"></i>';
		      $catText = "Geografia";
		      break;
		    case 6:
		      $logo = '<img src="images/history.png" alt="historia" width="20px">';
		      $catText = "Historia";
		      break;
		  }
		$row = '<tr>'.
				'<td class="list-action">'.
				'<div class="custom-control custom-checkbox">'.
				'<input type="checkbox" id="checkbox-'.$fila[0].'" class="custom-control-input" value="'.$fila[0].'" name="checked[]"/>'.
				'<label class="custom-control-label" for="checkbox-'.$fila[0].'">&nbsp;</label></div></td>'.
				'<td class="list-action ">'.
				'<a class="btn-action btn btn-edit" data-original-title="" title="">'.
				'<i class="fa fa-pencil"></i></a></td>'.
				'<td class="list-col-index-2 list-col-name-id list-col-type-text id="'.$fila[0].'-selectid">'.$fila[0].'</td>'.
				'<td class="list-col-index-3 list-col-name-texto list-col-type-text ">'.$fila[1].'</td>'.
				'<td class="list-col-index-3 list-col-name-a list-col-type-text ">'.$fila[2].'</td>'.
				'<td class="list-col-index-3 list-col-name-b list-col-type-text ">'.$fila[3].'</td>'.
				'<td class="list-col-index-3 list-col-name-c list-col-type-text ">'.$fila[4].'</td>'.
				'<td class="list-col-index-3 list-col-name-d list-col-type-text ">'.$fila[5].'</td>'.
				'<td class="list-col-index-3 list-col-name-categoria list-col-type-text ">'.$logo.' '.$catText.'</td>'.
				'<td class="list-col-index-3 list-col-name-correcta list-col-type-text ">'.$fila[7].'</td></tr>';
		$tabla .= $row;
	}
}
mysqli_close($con);
echo $tabla;
?>