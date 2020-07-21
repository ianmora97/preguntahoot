const express = require('express');
const router = express.Router();

const con = require('../database');

router.post('/checkKeyGame',(req,res)=>{
    con.query('select * from usuario where username = ?',
    [req.body.username, req.body.clave],
    (err,rows,fields)=>{
        if(!err){
            if(rows[0].rol == 2){
                res.send('Success');
            }else{
                res.send('NoAccess');
            }
        }else{
            res.send('NotFound');
        }
    });
});
module.exports = router;