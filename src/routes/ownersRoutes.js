const express = require('express');
const router = express.Router();

const Owner = require("../models/owner");


router.get('/owners', (req, res) => {
   Owner.find()
       .then((resultOwner) => {
          res.render("owners/owner", {
             title: "Owners",
             page: "owners",
             resultOwner
          })
       })
})

router.get('/owners/new', (req, res) => {
   res.render("owners/createOwner", {
      title : "Add owner",
      page : "owners_createOwners",
   })
})


//find single owner page
router.get("/owners/singleOwner/:id", function (req, res) {
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


//edit single post
router.get('/owners/singleOwner/edit/:id', (req, res) => {
   const ownerId = req.params.id;

   Owner.findById(ownerId)
       .then((foundOwner) => {
          console.log(' foundPost', foundOwner);
          res.render('owners/ownerEdit', {
             title: 'Owner about ...',
             page: 'owner_edit',
             myOwner: foundOwner,
          });
       })
       // redirect if not found
       .catch((err) => res.redirect('/owners'));
});


module.exports = router;