const Post = require("../models/post");

//blog index

const blog_index = (req, res) => {
   Post.find()
       .then((result) => {
          res.render('blog/blog', {
             title: 'Our blog',
             page: 'blog',
             result,
          })
       });
}

//create blog
const create_blog = (req, res) => {
   res.render("blog/createBlog", {
      title: 'Create new Post',
      page: 'createB',
   });
}

//find sigle blog
const blog_single = (req, res) => {
   const blogId = req.params.id
   Post.findById(blogId)
       .then(result => {
          res.render("blog/singlePage", {
             title: "singlePage",
             page: "singleP",
             post: result
          })
       })
}


//edit single blog
const edit_blog_single = (req, res) => {
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
}

module.exports = {
   blog_index,
   create_blog,
   blog_single,
   edit_blog_single,
}