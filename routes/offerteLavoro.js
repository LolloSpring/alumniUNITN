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
	res.render("./offerteLavoro/new");
});

// CREATE OFFERTA

router.post("/offerte", upload.single('offertaLavoro[foto]'), function(req, res){
    cloudinary.uploader.upload(req.file.path, function(result) {
        req.body.offertaLavoro.foto = result.secure_url;

        /*
        req.body.mentorship.author = {
            id: req.user._id,+
            username: req.user.username
        }
        */
        OffertaLavoro.create(req.body.offertaLavoro, function(err, offertaLavoro){
            if (err){
                console.log(err);
            } else {
                //res.redirect("/offerte" + offertaLavoro.id);
                res.redirect("/offerte");
            }
        });
    }); 
});

// SHOW OFFERTA

router.get("/offerte/:id", function(req, res){
    OffertaLavoro.findById(req.params.id, function(err, foundOffertaLavoro){
        if(err){
            console.log(err);
        } else {
            res.render("./offerteLavoro/show", {offertaLavoro: foundOffertaLavoro})
        }
    })
});

/*
// EDIT OFFERTA

router.get("/offerte/:id/edit");


// UPDATE OFFERTA

router.put("offerte/:id");


// DELETE OFFERTA

router.delete("offerte/:id");
*/



module.exports = router;