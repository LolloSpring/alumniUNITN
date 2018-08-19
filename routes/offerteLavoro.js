var express = require("express");
var router = express.Router();
var OffertaLavoro = require("../models/offertaLavoro");
var multer = require("multer");
var storage = multer.diskStorage({
    filename: function(req, file, callback){
        callback(null, Date.now() + file.originalname);
    }
});
var imageFilter = function (req, file, cb){
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return cb(new Error('Only image files are allowed'), false);
    }
    cb(null, true);
};

var upload = multer({storage: storage, fileFilter: imageFilter})

var cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'dhrnvxdzo',
    api_key: "579582588414364",
    api_secret: "zZACJkyQ2x_KTJVOCYJnI8Z1Yo4"
})

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


// NEW OFFERTA

router.get("/offerte/new", function(req, res){
	res.render("./offerte/new");
});
/*
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