/**
 * Created by godfr on 5/15/2016.
 */
var express = require('express');
var router = require('express').Router();

router.use(express.static(__dirname+'/../assets'));
router.get('/',function(req,res){
    res.sendfile('layouts/posts.html');
})

module.exports = router;