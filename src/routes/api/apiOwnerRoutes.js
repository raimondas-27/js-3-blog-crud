const express = require('express');
const router = express.Router();
const Owner = require("../../models/owner")


router.post('/', (req, res) => {
   const newOwner = new Owner(req.body);
   console.log(req.body)
   newOwner
       .save()
       .then((result) => res.json({msg: 'success', redirect: '/owners'}))
       .catch((err) => res.status(400).json(err.message));
});



router.delete("/:id", function (req, res) {
   Owner.findByIdAndRemove(req.params.id, )
       .then((result) => res.json({msg: 'delete success', redirect: '/owners'}))
       .catch((err) => res.status(400).json(err));
})

module.exports = router