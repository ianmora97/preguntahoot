const express = require('express');
const router = express.Router();

const con = require('../database');

router.post('/bringQuestion',(req,res)=>{
    var query = con.query('select * from pregunta where categoria = ? ORDER BY Rand() LIMIT 1',
    [req.body.categoria],
    (err,rows,fields)=>{
        if(rows[0] != undefined){
            res.send(rows[0]);
        }else{
            res.send('NoAccess');
        }
    });
});

module.exports = router;