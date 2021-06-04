const express = require('express');
const router = express.Router();
const Post = require("../models/post");

router.get("/blog", function (req, res) {
   Post.find()
       .then((result) => {
          res.render('blog/blog', {
             title: 'Our blog',
             page: 'blog',
             result,
          })
       });
});

// create blog page /blog/create
// contact page

router.get('/blog/create', function (req, res) {
   res.render("blog/createBlog", {
      title: 'Create new Post',
      page: 'createB',
   });
});

//find single post
router.get("/single/:id", function (req, res) {
   const blogId = req.params.id
   Post.findById(blogId)
       .then(result => {
          res.render("blog/singlePage", {
             title: "singlePage",
             page: "singleP",
             post: result
          })
       })
})

//edit single post
router.get('/single/edit/:id', (req, res) => {
   const blogId = req.params.id;

   Post.findById(blogId)
       .then((foundPost) => {
          console.log(' foundPost', foundPost);
          res.render('blog/singlePageEdit', {
             title: 'Post about ...',
             page: 'single_edit',
             post: foundPost,
          });
       })
       // redirect if not found
       .catch((err) => res.redirect('/blog'));
});

module.exports = router