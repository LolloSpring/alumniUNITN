// modello per gestione in database della richiesta di lavoro

var mongoose = require("mongoose")

var richiestaLavoroSchema = new mongoose.Schema({
	nome: String,
	cognome: String,
	foto: String,
	corsoLaurea: String,
	annoLaurea: String,
	interessi: String,
	cv: String,
	titoloTesi: String,
	contattoMail: String,
	contattoTelegram: String,
	/*
	author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    */
});

module.exports = mongoose.model("RichiestaLavoro", richiestaLavoroSchema);