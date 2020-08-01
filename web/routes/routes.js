const express = require('express');
const router = express.Router();

const con = require('../database');

router.get('/',(req,res)=>{
    res.render('index');
});

router.get('/doGame',(req,res)=>{
    res.render('play_index');
});

router.get('/game',(req,res)=>{
    res.render('game');
});

router.get('/gameWating',(req,res)=>{
    res.render('gameWating');
});

router.get('/crearPreguntas',(req,res)=>{
    res.render('crearPreguntas');
});

router.get('/play',(req,res)=>{
    res.render('play');
});

module.exports = router;