/**
 * Created by godfr on 5/15/2016.
 */
var Post=require('../../models/post');
var router = require('express').Router();

    router.get('/api/posts', function (req, res, next) {

        Post.find().sort('-date').exec(function (err, posts) {
            if (err) {
                return next(err)
            }
            res.json(posts);
        })
    });


    router.post('/api/posts', function (req, res) {

        var post = new Post({username: req.body.username, body: req.body.body});
        post.save(function (err, post) {
            if (err) {
                return next(err)
            }
            ;
            return res.json(201, post);
        })
    })


module.exports =router;