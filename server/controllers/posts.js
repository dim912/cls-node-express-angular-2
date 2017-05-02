var express = require('express')
var router = express.Router()
var Post = require('../models/post')

router.get('/', function (req, res) {
    console.log("api is called")
    Post.all(function (err, posts) {
        res.status(200).json(posts.data)
    })
})

module.exports = router