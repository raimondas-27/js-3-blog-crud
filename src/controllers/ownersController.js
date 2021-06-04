const Owner = require("../models/owner");

//owners_index

const owners_index = (req, res) => {
   Owner.find()
       .then((resultOwner) => {
          res.render("owners/owner", {
             title: "Owners",
             page: "owners",
             resultOwner
          })
       })
}

//create new owner
const owners_new = (req, res) => {
   res.render("owners/createOwner", {
      title: "Add owner",
      page: "owners_createOwners",
   })
}

//find single owner
const owners_single = (req, res) => {
   const ownerId = req.params.id
   Owner.findById(ownerId)
       .then(result => {
          res.render("owners/singleOwner", {
             title: "singleOwner",
             page: "singleOwner",
             owner: result
          })
       })
}


//edit single owner
const edit_owners_single = (req, res) => {
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
}

const owner_search = (req, res) => {
   console.log(req.query)
   res.send("you are in right place")
}


module.exports = {
   owners_index,
   owners_new,
   owners_single,
   edit_owners_single,
   owner_search,
};