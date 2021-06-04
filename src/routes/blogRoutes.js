const express = require('express');
const router = express.Router();
const Post = require("../models/post");
const blogControllers = require("../controllers/blogController")


//blog index
router.get("/blog", blogControllers.blog_index);


// create blog page /blog/create
router.get('/blog/create', blogControllers.create_blog);


//find single post
router.get("/single/:id", blogControllers.blog_single);


//edit single post
router.get('/single/edit/:id', blogControllers.edit_blog_single);

module.exports = router