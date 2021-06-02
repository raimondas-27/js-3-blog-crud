const express = require('express');
const router = express.Router();



const Post = require("../models/post");


// home page
router.get('/', function (req, res) {
  // paimti index.ejs faila is views direktorijos
  res.render('index', {
    title: 'Home',
    page: 'home',
  });
});

// about page
router.get('/about', function (req, res) {
  res.render('about', {
    title: 'About us',
    page: 'about',
  });
});


// blog page
router.get("/blog", function (req, res) {
  Post.find()
      .then((result) => {
        res.render('blog', {
          title: 'Our blog',
          page: 'blog',
          result,
        })
      });
});

// contact page
router.get('/contact', function (req, res) {
  res.render('contact', {
    title: 'Contact us',
    page: 'contact',
  });
});

// create blog page /blog/create
// contact page

router.get('/blog/create', function (req, res) {
  res.render('createBlog', {
    title: 'Create new Post',
    page: 'createB',
  });
});

//find single post
router.get("/single/:id", function (req, res) {
  const blogId = req.params.id
  Post.findById(blogId)
      .then(result => {
        res.render("singlePage", {
          title: "singlePage",
          page: "singleP",
          post: result
        })
      })
})

//edit single post
router.get("/single/edit/:id", function (req, res) {
  const blogId = req.params.id
  Post.findById(blogId)
      .then(result => {
        res.render("singlePageEdit", {
          title: "singlePage",
          page: "singleP-edit",
          post: result
        })
      })
})



module.exports = router;