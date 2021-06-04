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


module.exports = {
   owners_index
};