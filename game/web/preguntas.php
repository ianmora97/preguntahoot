<?php
session_start();
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" type="image/x-icon" href="https://www.preguntados.com/compiled/img/ruleta.png">
    <title>Dashboard</title>
    <link rel="stylesheet" type="text/css" href="https://demo.tastyigniter.com/app/system/assets/ui/flame.css"
        name="flame-css" />
    <link rel="stylesheet" type="text/css" href="https://demo.tastyigniter.com/app/admin/assets/css/admin.css"
        name="admin-css" />
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
    <!--Jquery CDN-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!--CSS General-->
    <link rel="stylesheet" href="css/general.css" />
    <script src="js/admin/preguntas.js"></script>
</head>

<body class="page">
    <nav class="navbar navbar-top navbar-expand navbar-fixed-top" style="height: 62px;" role="navigation">
        <div class="container-fluid">
            <div class="navbar-brand">
                <a class="logo" id="asd" href="#">
                    <img class="mx-2" src="https://www.preguntados.com/compiled/img/willy_footer.png" alt="rompecabezas"
                        width="50px" />
                </a>
            </div>
            <div class="page-title">
                <span class="font-1 color-azul" style="font-size: xx-large;">Dashboard</span>
            </div>

            <div class="navbar navbar-right">
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navSidebar"
                    aria-controls="navSidebar" aria-expanded="false" aria-label="Toggle navigation"
                    data-original-title="" title="">
                    <span class="fa fa-bars" data-original-title="" title=""></span>
                </button>

                <ul id="menu-mainmenu" class="navbar-nav" data-control="mainmenu" data-alias="mainmenu">
                    <li id="menuitem-preview" class="nav-item">
                        <a class="nav-link front-end" title="" href="play_index.html" target="_blank"
                            data-original-title="Jugar">
                            <i class="fas fa-gamepad" style="height: 20px;font-size: 20px;margin: 18px 0 0 0;"></i>
                        </a>
                    </li>
                    <li id="menuitem-activity" class="nav-item dropdown">
                        <a class="nav-link" data-toggle="dropdown" data-original-title="" title=""
                            aria-expanded="false">
                            <i class="fa fa-bell" role="button"></i>
                        </a>

                        <ul class="dropdown-menu is-loaded" data-request-options="activity">
                            <li class="dropdown-header">
                                <a href="#" class="pull-right mark-as-read" data-original-title="" title=""><i
                                        class="fa fa-check"></i>
                                </a>Recent activities
                            </li>
                            <li id="menuitem-activity-activity-options" class="dropdown-body">
                                <ul class="menu menu-lg" id="notificaciones">
                                    <!--
                                    
                                    <li class="divider"></li>
                                    -->
                                </ul>
                            </li>
                            <li class="dropdown-footer">
                                <a class="text-center" href="#" data-original-title="" title="">
                                    <i class="fa fa-ellipsis-h"></i></a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link" data-toggle="dropdown" data-original-title="" title="">
                            <img class="rounded-circle icon-border border-info"
                                src="//www.gravatar.com/avatar/10043d8b024e9abf6e92089a262336ba.png?s=64&amp;d=mm" />
                        </a>
                        <div class="dropdown-menu">
                            <div class="d-flex flex-column w-100 align-items-center">
                                <div class="pt-4 px-4 pb-2">
                                    <img class="rounded-circle"
                                        src="//www.gravatar.com/avatar/10043d8b024e9abf6e92089a262336ba.png?s=64&amp;d=mm" />
                                </div>
                                <div class="pb-3 text-center">
                                    <div class="text-uppercase" id="nombreParam"><?php echo $_SESSION['nombre'] ?></div>
                                    <div class="text-muted" id="usernameParam"><?php echo $_SESSION['user'] ?></div>
                                </div>
                            </div>
                            <a class="dropdown-item" data-toggle="modal" data-target="#editStaffStatusModal"
                                role="button" data-original-title="" title="">
                                <i class="fa fa-circle fa-fw text-success"></i>Set Status</a>
                            <a class="dropdown-item" href="#" data-original-title="" title="">
                                <i class="fa fa-user fa-fw"></i>Editar Datos</a>
                            <a class="dropdown-item text-danger" href="#" id="salirLogout" data-original-title=""
                                title="">
                                <i class="fa fa-power-off fa-fw"></i>Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
        <div style="position: absolute; top: 5px; right: 20px; z-index: 99; width: 20%;" id="notificacionesToast">

        </div>
    </div>
    <div class="sidebar bg-azul" role="navigation">
        <div id="navSidebar" class="nav-sidebar bg-azul">
            <ul id="side-nav-menu" class="nav">
                <li class="nav-item active">
                    <a class="nav-link dashboard admin" href="dashboard.php" aria-expanded="true">
                        <i class="fa fa-tachometer-alt fa-fw"></i>

                        <span class="content">Dashboard</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link restaurant has-arrow" href="#" aria-expanded="false">
                        <i class="fas fa-question-circle mr-3"></i>

                        <span class="content">Preguntas</span>
                    </a>

                    <ul class="nav collapse" aria-expanded="false">
                        <li class="nav-item">
                            <a class="nav-link tables" href="categorias.html" aria-expanded="false">
                                Categorias
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link tables" href="preguntas.html" aria-expanded="false">
                                Preguntas
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link sales has-arrow" href="#" aria-expanded="false">
                        <i class="fas fa-trophy mr-3"></i>

                        <span class="content">Historial</span>
                    </a>

                    <ul class="nav collapse" aria-expanded="false">
                        <li class="nav-item">
                            <a class="nav-link orders" href="partidas.html" aria-expanded="false">
                                Partidas</a>
                        </li>
                    </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link users has-arrow" href="#" aria-expanded="false">
                        <i class="fa fa-user fa-fw"></i>

                        <span class="content">Usuarios</span>
                    </a>

                    <ul class="nav collapse" aria-expanded="false">
                        <li class="nav-item">
                            <a class="nav-link customers" aria-expanded="false" href="usuarios.html">
                                Usuarios
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>

    <div class="page-wrapper">
        <nav class="mb-3">
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
                    data-request="onSave" data-progress-indicator="Saving..." aria-controls="nav-home"
                    aria-selected="true"><i class="fas fa-list"></i> Lista de Preguntas</a>
                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
                    data-request="onSave" data-progress-indicator="Saving..." aria-controls="nav-profile"
                    aria-selected="false"><i class="fas fa-plus"></i> Crear Pregunta</a>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div class="row-fluid">
                    <div id="toolbar" class="toolbar btn-toolbar">
                        <div class="toolbar-action">
                            <div class="container-fluid">
                                <div class="row">

                                    <div class="col-md-1 p-0 mb-3">
                                        <button class="btn btn-danger" data-attach-loading="" id="eliminarCat">
                                            <i class="fa fa-trash-o"></i> Eliminar
                                        </button>
                                    </div>

                                    <div class="col-md-11 p-0">
                                        <div class="input-group">
                                            <input type="text" class="form-control"
                                                aria-label="Text input with dropdown button">
                                            <div class="input-group-append">
                                                <button class="btn btn-success dropdown-toggle" type="button"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
                                                        class="fa fa-filter"></i>Filtrar</button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Categoria</a>
                                                    <a class="dropdown-item" href="#">Texto</a>
                                                    <a class="dropdown-item" href="#">Respuesta</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="table table-sm table-responsive-sm">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th class="list-action">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" id="checkboxAll-lists" class="custom-control-input"
                                                onclick="$('input[name*=\'checked\']').prop('checked', this.checked)">
                                            <label class="custom-control-label" for="checkboxAll-lists">&nbsp;</label>
                                        </div>
                                    </th>
                                    <th class="list-action" style="width: 65px;"><i class="fa fa-pencil"></i> edit</th>
                                    <th class="list-cell-name-id list-cell-type-text">
                                        <a class="sort-col" data-request="list::onSort" data-request-form="#list-form"
                                            data-request-data="sort_by: 'id'">
                                            <i class="fas fa-list-ol"></i> Id
                                        </a>
                                    </th>
                                    <th class="list-cell-name-texto list-cell-type-text">
                                        <a class="sort-col" data-request="list::onSort" data-request-form="#list-form"
                                            data-request-data="sort_by: 'texto'">
                                            <i class="fas fa-question"></i> Texto
                                        </a>
                                    </th>
                                    <th class="list-cell-name-a list-cell-type-text">
                                        <a class="sort-col" data-request="list::onSort" data-request-form="#list-form"
                                            data-request-data="sort_by: 'a'">
                                            <span class="fa-a"></span>
                                        </a>
                                    </th>
                                    <th class="list-cell-name-b list-cell-type-text">
                                        <a class="sort-col" data-request="list::onSort" data-request-form="#list-form"
                                            data-request-data="sort_by: 'b'">
                                            <span class="fa-b"></span>
                                        </a>
                                    </th>
                                    <th class="list-cell-name-c list-cell-type-text">
                                        <a class="sort-col" data-request="list::onSort" data-request-form="#list-form"
                                            data-request-data="sort_by: 'c'">
                                            <span class="fa-c"></span>
                                        </a>
                                    </th>
                                    <th class="list-cell-name-d list-cell-type-text">
                                        <a class="sort-col" data-request="list::onSort" data-request-form="#list-form"
                                            data-request-data="sort_by: 'd'">
                                            <span class="fa-d"></span>
                                        </a>
                                    </th>
                                    <th class="list-cell-name-categoria list-cell-type-text">
                                        <a class="sort-col" data-request="list::onSort" data-request-form="#list-form"
                                            data-request-data="sort_by: 'categoria'">
                                            <i class="fas fa-crown"></i> Categoria
                                        </a>
                                    </th>
                                    <th class="list-cell-name-min-correcta list-cell-type-text">
                                        <a class="sort-col" data-request="list::onSort" data-request-form="#list-form"
                                            data-request-data="sort_by: 'correcta'">
                                            <i class="fas fa-check"></i> Correcta
                                        </a>
                                    </th>
                                </tr>
                            </thead>
                            <tbody id="listaPreguntas">
                                <!--LISTA DE PREGUNTAS-->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div class="row-fluid mb-3">
                    <div id="toolbar" class="toolbar btn-toolbar ">
                        <div class="toolbar-action">
                            <div class="progress-indicator-container">
                                <a class="btn btn-success text-white" data-request="onSave"
                                    data-progress-indicator="Saving..." id="agregar" tabindex="0" data-original-title=""
                                    title="">
                                    <i class="fa fa-save"></i> Agregar Pregunta</a>
                                <a class="btn btn-info text-white" data-request="onSave" data-request-data="close:1"
                                    data-progress-indicator="Saving..." id="agregarSalir" tabindex="0"
                                    data-original-title="" title="">
                                    <i class="fa fa-save"></i> Agregar &amp; Salir</a>
                            </div>
                        </div>
                    </div>
                    <div class="form-widget">
                        <div id="form-outside-tabs" class="">
                            <div class="form-fields">
                                <div class="form-group w-100">
                                    <label for="">Texto de la pregunta</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend w-100">
                                            <div class="input-group-text">
                                                <i class="fas fa-question-circle"></i>
                                            </div>
                                            <input id="texto" type="text" class="form-control"
                                                aria-label="Text input with checkbox" autocomplete="false">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group w-100">
                                    <label for="">Respuesta A</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <input onchange="correctaRadio('a')" type="radio" name="respuestaCorrecta"
                                                    value="a">
                                            </div>
                                        </div>
                                        <input id="resA" type="text" class="form-control"
                                            aria-label="Text input with checkbox" autocomplete="false">
                                    </div>
                                </div>
                                <div class="form-group w-100">
                                    <label for="">Respuesta B</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <input onchange="correctaRadio('b')" type="radio" name="respuestaCorrecta"
                                                    value="b">
                                            </div>
                                        </div>
                                        <input id="resB" type="text" class="form-control"
                                            aria-label="Text input with checkbox" autocomplete="false">
                                    </div>
                                </div>
                                <div class="form-group w-100">
                                    <label for="">Respuesta C</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <input onchange="correctaRadio('c')" type="radio" name="respuestaCorrecta" value="c">
                                            </div>
                                        </div>
                                        <input id="resC" type="text" class="form-control"
                                            aria-label="Text input with checkbox" autocomplete="false">
                                    </div>
                                </div>
                                <div class="form-group w-100">
                                    <label for="">Respuesta D</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">
                                                <input onchange="correctaRadio('d')" type="radio" name="respuestaCorrecta" value="d">
                                            </div>
                                        </div>
                                        <input id="resD" type="text" class="form-control"
                                            aria-label="Text input with checkbox" autocomplete="false">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Categoria</label>
                                    <div class="input-group my-3">
                                        <div class="dropdown">
                                            <button class="btn btn-info dropdown-toggle" type="button"
                                                id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                Categoria
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                <button class="dropdown-item" type="button" id="ca1">
                                                    <i class="fas fa-paint-brush" style="color:red;"></i> Arte</button>
                                                <div class="dropdown-divider"></div>
                                                <button class="dropdown-item" type="button" id="ca2">
                                                    <i class="fas fa-flask" style="color:#28a745;"></i> Ciencia</button>
                                                <div class="dropdown-divider"></div>
                                                <button class="dropdown-item" type="button" id="ca3">
                                                    <i class="fas fa-football-ball" style="color:#fd7e14;"></i>
                                                    Deportes</button>
                                                <div class="dropdown-divider"></div>
                                                <button class="dropdown-item" type="button" id="ca4">
                                                    <i class="fas fa-film" style="color:#e83e8c;"></i>
                                                    Entretenimiento</button>
                                                <div class="dropdown-divider"></div>
                                                <button class="dropdown-item" type="button" id="ca5">
                                                    <i class="fas fa-globe-americas" style="color:#007bff;"></i>
                                                    Geografia</button>
                                                <div class="dropdown-divider"></div>
                                                <button class="dropdown-item" type="button" id="ca6">
                                                    <img src="images/history.png" alt="historia" width="20px">
                                                    Historia</button>
                                            </div>
                                        </div>
                                        <span class="badge badge-light" id="badgeCategoria"
                                            style="font-size: 15px; padding:10px; margin:0 10px; display: none;"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script charset="utf-8" type="text/javascript" src="https://demo.tastyigniter.com/app/system/assets/ui/flame.js"
        name="flame-js"></script>

    <script charset="utf-8" type="text/javascript" src="https://demo.tastyigniter.com/app/admin/assets/js/admin.js"
        name="admin-js"></script>
</body>

</html>