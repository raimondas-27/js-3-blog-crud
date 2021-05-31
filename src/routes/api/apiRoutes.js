const express = require('express');
const router = express.Router();

const blogDb = require('../../data/blogDb');

// blog api
// /api/blog gauti visu postus json pavidalu
router.get('/', (req, res) => {
  res.json(blogDb);
});


router.post("/", (req, res) => {
   res.json({msg : "testing"});
});

module.exports = router;