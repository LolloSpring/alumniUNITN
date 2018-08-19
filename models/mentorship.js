// modello per gestione nel database dell' annuncio di mentorship
var mongoose = require("mongoose");

var mentorshipSchema = new mongoose.Schema({
	nome: String,
	cognome: String,
	foto: String,
	corsoLaurea: String,
	annoLaurea: String,
	professione: String,
	azienda: String,
	luogo: String,
	interessi: String,
	cv: String,
	titoloTesi: String,
	contattoMail: String,
	contattoTelegram: String,
	mezzoContattoPreferito: String,
	quandoContattoPreferito: String
	/*author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },*/
})

module.exports = mongoose.model("Mentorship", mentorshipSchema)