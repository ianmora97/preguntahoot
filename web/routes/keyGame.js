const express = require('express');
const router = express.Router();

const con = require('../database');

router.post('/crearPartidaKeyGame',(req,res)=>{
    con.query('insert into keygame(token) value(?)',
    [req.body.token],
    (err,result)=>{
        if(result.affectedRows == 0){
            res.send('error');
        }else{
            var temp = req.body.usuario;
            var query = con.query('select * from usuario where username = ?',
            [temp.username],
            (err,rows,fields)=>{
                usuarioAnfitrion = rows[0];
                token = req.body.token;
                req.flash('token',req.body.token);
                // console.log('[OK] Registro nuevo de token',req.body.token,'Usuario',usuarioAnfitrion.username);
                res.send('Success');
            });
        }
    });
});

router.post('/checkKeyGame',(req,res)=>{
    con.query('select * from keygame where token = ?',
    [req.body.token],
    (err,rows,fields)=>{
        if(rows[0] != undefined){
            res.send('Success');
        }else{
            res.send('NoAccess');
        }
    });
});

router.post('/keyGameUnirseAPartida',(req,res)=>{
    var usuarioNuevo = {
        username:req.body.nombreInvitadoKey,
        token:req.body.tokenEntrarPartida
    };
    usuarios_juego.push(usuarioNuevo);
    // console.log('Usuario',usuarioNuevo.username,' Nuevo Unido a partida:', usuarioNuevo.token,'\nLista:',usuarios_juego);
    res.render('gameWait',{usuarioNuevo,usuarioAnfitrion});
});

router.get('/getToken',(req,res)=>{
    var token = req.flash('token');
    res.send(token);
});

module.exports = router;