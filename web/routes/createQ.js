const express = require('express');
const router = express.Router();

const con = require('../database');

router.post('/addPregunta',(req,res)=>{
    var query = con.query('insert into pregunta (texto,r_a,r_b,r_c,r_d,categoria,correcta) values (?,?,?,?,?,?,?)',
    [req.body.texto, req.body.respuestaA, req.body.respuestaB, req.body.respuestaC, req.body.respuestaD, 
        req.body.idCategoria, req.body.correcta],
    (err,result)=>{
        if(err){
            res.send('NotInserted');
        }else{
            console.log('[MYSQL] Se registro una pregunta nueva',req.body.texto);
            res.send('Success');
        }
    });
});

module.exports = router;