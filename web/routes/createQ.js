const express = require('express');
const router = express.Router();

const con = require('../database');

router.post('/addPregunta',(req,res)=>{
    console.log(req.body);
    var query = con.query('insert into pregunta (texto,r_a,r_b,r_c,r_d,categoria,correcta) values (?,?,?,?,?,?,?)',
    [req.body.texto, req.body.respuestaA, req.body.respuestaB, req.body.respuestaC, req.body.respuestaD, 
        req.body.idCategoria, req.body.correcta],
    (err,result)=>{
        if(err){
            console.log('No se inserto la pregunta');
            res.send('NotInserted');
        }else{
            console.log('Se registro una pregunta nueva',result.affectedRows);
            res.send('Success');
        }
    });
});

module.exports = router;