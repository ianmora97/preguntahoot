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
        name="flame-css">
    <link rel="stylesheet" type="text/css" href="https://demo.tastyigniter.com/app/admin/assets/css/admin.css"
        name="admin-css">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
    <!--Jquery CDN-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!--CSS General-->
    <link rel="stylesheet" href="css/general.css" />
    <script src="js/admin/dashboard.js"></script>
</head>

<body class="page bg-graylight">
    <nav class="navbar navbar-top navbar-expand navbar-fixed-top" style="height: 62px;" role="navigation">
        <div class="container-fluid">
            <div class="navbar-brand">
                <a class="logo" id="asd" href="#">
                    <img class="mx-2" src="https://www.preguntados.com/compiled/img/willy_footer.png" alt="rompecabezas"
                        width="50px" />
                </a>
            </div>
            <div class="page-title">
                <span class="font-1 color-azul">Dashboard</span>
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
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link" data-toggle="dropdown" data-original-title="" title="">
                            <img class="rounded-circle icon-border border-info"
                                src="//www.gravatar.com/avatar/10043d8b024e9abf6e92089a262336ba.png?s=64&amp;d=mm">
                        </a>
                        <div class="dropdown-menu">
                            <div class="d-flex flex-column w-100 align-items-center">
                                <div class="pt-4 px-4 pb-2">
                                    <img class="rounded-circle"
                                        src="//www.gravatar.com/avatar/10043d8b024e9abf6e92089a262336ba.png?s=64&amp;d=mm">
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

    <div class="sidebar bg-azul" role="navigation">
        <div id="navSidebar" class="nav-sidebar bg-azul">
            <ul id="side-nav-menu" class="nav">
                <li class="nav-item active">
                    <a class="nav-link dashboard admin" href="#" aria-expanded="true">
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

                                Categorias </a>

                        </li>
                        <li class="nav-item">
                            <a class="nav-link tables" href="preguntas.php" aria-expanded="false">

                                Preguntas </a>

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

                                Usuarios </a>

                        </li>
                    </ul>
                </li>

            </ul>
        </div>
    </div>


    <div class="page-wrapper">
        <div class="row-fluid">
        </div>
    </div>
    <script charset="utf-8" type="text/javascript" src="https://demo.tastyigniter.com/app/system/assets/ui/flame.js"
        name="flame-js"></script>

    <script charset="utf-8" type="text/javascript" src="https://demo.tastyigniter.com/app/admin/assets/js/admin.js"
        name="admin-js"></script>


</body>

</html>