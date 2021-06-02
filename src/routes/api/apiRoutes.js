const express = require('express');
const router = express.Router();
const Post = require("../../models/post")

const blogDb = require('../../data/blogDb');

// blog api
// /api/blog gauti visu postus json pavidalu
router.get('/', (req, res) => {
   res.json(blogDb);
});

// create new post
router.post('/', (req, res) => {
   // console.log(req.body);
   const newPost = new Post(req.body);
   // saugom db
   newPost
       .save()
       .then((result) => res.json({msg: 'success', redirect: '/blog'}))
       .catch((err) => res.status(400).json(err.message));
   // paimam req body duomenis ir su jais sukuriam nauja post ir ikeliam i blogDb
});

router.delete("/:id", function (req, res) {
   Post.findByIdAndRemove(req.params.id, )
       .then((result) => res.json({msg: 'delete success', redirect: '/blog'}))
       .catch((err) => res.status(400).json(err));
})

router.put('/', )


module.exports = router;