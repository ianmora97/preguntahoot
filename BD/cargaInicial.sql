-- Elegir la tabla--
use juego;
-- Insercion de Usuarios--
insert into usuario (nombre,username,clave,guest,rol) values("Ian Mora", "ianmorar03","root1234!",0,2);
insert into usuario (nombre,username,clave,guest,rol) values("Administrador","sadmin","lamismadesiempreq1w2e3r4!",0,2);

select * from usuario;

-- Insercion de Categorias--
insert into categoria (nombre) value("Arte");
insert into categoria (nombre) value("Ciencia");
insert into categoria (nombre) value("Deportes");
insert into categoria (nombre) value("Entretenimiento");
insert into categoria (nombre) value("Geografia");
insert into categoria (nombre) value("Historia");

select * from categoria;