//aprasyti owner schema
//reikia tureti username, email


const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ownerSchema = new Schema({
       name: {
          type: String,
          required: true
       },
       email: {
          type: String,
          required: true
       },
    },
    {timestamps: true}
);

const Owner = mongoose.model("owner", ownerSchema)

module.exports = Owner;