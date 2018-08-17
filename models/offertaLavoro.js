// modello per gestione in database dell'offerta di lavoro fatta dal recruiter

var mongoose = require("mongoose")

var offertaLavoroSchema = new mongoose.Schema({
	nome: String,
	cognome: String,
	foto: String,
	corsoLaurea: String,
	annoLaurea: String,
	professione: String,
	contattoMail: String,
	contattoTelegram: String,
	nomeAzienda: String,
	descrizionePosizione: String,
	fotoAzienda: String,
	tipoContratto: String,
	salario: String,
	periodo: String,
	luogo: String
});

module.exports = mongoose.model("OffertaLavoro", offertaLavoroSchema);