/**
 * Created by godfr on 5/14/2016.
 */
var express = require('express');
var bodyParser = require('body-parser');
var Post=require('./models/post');
var gulp = require('gulp');
var app = express();

gulp.task('hello',function(){
    console.log('hello world');
})
app.use(bodyParser.json());
app.use(require('./controllers/api/posts'));
app.use(require('./controllers/static'));
app.listen(3000, function(){
    console.log('Server listening on ',3000)
})