const express = require('express');
const router = express.Router();

const con = require('../database');

router.post('/usuarios',(req,res)=>{
    var query = con.query('select rol from usuario where username = ? and clave = ?',
    [req.body.username, req.body.clave],
    (err,rows,fields)=>{
        if(rows[0] != undefined){
            if(rows[0].rol == 2){
                req.flash('admin',rows[0]);
                res.send('Success');
            }else{
                res.send('NoAccess');
            }
        }else{
            res.send('NotFound');
        }
    });
});
router.post('/usuarios/login',(req,res)=>{
    var query = con.query('select * from usuario where username = ? and clave = ?',
    [req.body.username, req.body.clave],
    (err,rows,fields)=>{
        if(rows[0] == undefined){
            res.send('NotFound');
        }else{
            req.flash('usuarioAnfitrion',rows[0]);
            res.send('Success');
        }
    });
});

router.post('/getUsuarioAnfitrion',(req,res)=>{
    console.log('[OK] Usuario Anfitrion',usuarioAnfitrion);
    res.send(usuarioAnfitrion);
});

router.post('/getUsuariosJuego',(req,res)=>{
    res.send(usuarios_juego);
});

router.post('/registrarse',(req,res)=>{
    var query = con.query('insert into usuario (nombre,username,clave,rol) values (?,?,?,1)',
    [req.body.nombre, req.body.username, req.body.clave],
    (err,result)=>{
        if(err){
            res.send('NotInserted');
        }else{
            console.log('[MYSQL] Se registro un usuario nuevo',result.body.nombre);
            res.send('Success');
        }
    });
});
module.exports = router;