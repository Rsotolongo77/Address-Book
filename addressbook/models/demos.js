const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//set up db object model
const Contact = new Schema({
    lastName: { type: String, required: true },
    firstName: { type: String, required: true },
    email: { type: String, required: false },
    phoneNumber: { type: String, required: true },
    birthDate: { type: String, required: false },
    address: { type: String, required: false }
})

module.exports = mongoose.model("Contacts", Contact);