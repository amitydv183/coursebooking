const mongoose = require("mongoose");

const ConnectSchema = new mongoose.Schema({
    name: {
        type:String
    }
})
const ContactModel = mongoose.model("Contact", ConnectSchema);

module.exports = ContactModel