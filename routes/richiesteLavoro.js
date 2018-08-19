var express = require("express");
var router = express.Router();
var RichiestaLavoro = require("../models/richiestaLavoro");


// INDEX

router.get("/richieste/", function(req, res){
	RichiestaLavoro.find({}, function(err, allRichiesteLavoro){
		if(err){
			console.log(err);
		} else {
			res.render("./richiesteLavoro/index", {richiesteLavoro: allRichiesteLavoro});
		}
	});
});


// NEW RICHIESTA

router.get("/richieste/new"function(req, res){
	res.render("./richieste/new");
});

/*
// CREATE RICHIESTA

router.post("/richieste");


// SHOW RICHIESTA

router.get("/richieste/:id");


// EDIT RICHIESTA

router.get("/richieste/:id/edit");


// UPDATE RICHIESTA

router.put("/richieste/:id");


// DELETE RICHIESTA

router.delete("/richieste/:id");
*/


module.exports = router;