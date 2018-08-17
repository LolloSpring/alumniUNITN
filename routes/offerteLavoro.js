var express = require("express");
var router = express.Router();
var OffertaLavoro = require("../models/offertaLavoro");

// INDEX

router.get("/offerte", function(req, res){
	OffertaLavoro.find({}, function(err, allOfferteLavoro){
		if(err){
			console.log(err);
		} else {
			res.render("./offerteLavoro/index", {offerteLavoro: allOfferteLavoro})
		}
	})
});

/*
// NEW OFFERTA

router.get("/offerte/new");


// CREATE OFFERTA

router.post("/offerte");


// SHOW OFFERTA

router.get("/offerte/:id");


// EDIT OFFERTA

router.get("/offerte/:id/edit");


// UPDATE OFFERTA

router.put("offerte/:id");


// DELETE OFFERTA

router.delete("offerte/:id");
*/



module.exports = router;