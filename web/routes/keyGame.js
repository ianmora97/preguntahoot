const express = require('express');
const router = express.Router();

const con = require('../database');

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
        username:req.body.username,
        token:req.body.token
    };
    usuarios_juego.push(usuarioNuevo);
    console.log('Usuarios Arreglo\n',usuarios_juego);
});
module.exports = router;