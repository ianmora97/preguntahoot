const express = require('express');
const router = express.Router();

const con = require('../database');

router.get('/',(req,res)=>{
    res.render('index');
});

router.get('/doGame',(req,res)=>{
    res.render('play_index');
});

module.exports = router;