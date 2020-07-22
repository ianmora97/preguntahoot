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
            req.flash('usuario',rows[0]);
            res.send('Success');
        }
    });
});

router.post('/registrarse',(req,res)=>{
    var query = con.query('insert into usuario (nombre,username,clave,rol) values (?,?,?,1)',
    [req.body.nombre, req.body.username, req.body.clave],
    (err,result)=>{
        if(result.affectedRows == 0){
            res.send('NotInserted');
        }else{
            console.log('Se registro un usuario nuevo',result.affectedRows);
            res.send('Success');
        }
    });
});
module.exports = router;