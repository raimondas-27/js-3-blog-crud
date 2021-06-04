const express = require('express');
const router = express.Router();
const ownersControllers = require("../controllers/ownersController")

const Owner = require("../models/owner");

//load controllers
router.get('/owners', ownersControllers.owners_index);


//make new owner
router.get('/owners/new', ownersControllers.owners_new);


//find single owner page
router.get("/owners/singleOwner/:id",ownersControllers.owners_single);


//edit single post
router.get('/owners/singleOwner/edit/:id', ownersControllers.edit_owners_single);


module.exports = router;