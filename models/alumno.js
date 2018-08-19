// modello per gestione degli alumni-utenti dell'applicazione --> serve poi per la fase di autenticazione
var mongoose = require("mongoose");

var passportLocalMongoose = require("passport-local-mongoose");


var UserSchema = new mongoose.Schema({
    username: String,
    password: String
})

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);