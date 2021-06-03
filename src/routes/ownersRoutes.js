const express = require('express');
const router = express.Router();

const Owner = require("../models/owner");


router.get('/', (req, res) => {
   Owner.find()
       .then((resultOwner) => {
          res.render("owners/index", {
             title: "Owners",
             page: "owners",
             resultOwner
          })
       })
})

router.get('/new', (req, res) => {
   res.render("owners/createOwner", {
      title : "Add owner",
      page : "owners_createOwners",
   })
})


//find single owner page
router.get("/singleOwner/:id", function (req, res) {
  const ownerId = req.params.id
  Owner.findById(ownerId)
      .then(result => {
        res.render("owners/singleOwner", {
          title: "singleOwner",
          page: "singleOwner",
          owner: result
        })
      })
})


module.exports = router;