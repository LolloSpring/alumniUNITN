var express = require("express");
var router = express.Router();
var RichiestaLavoro = require("../models/richiestaLavoro");
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

router.get("/richieste/new", function(req, res){
	res.render("./richiesteLavoro/new");
});


// CREATE RICHIESTA

router.post("/richieste", upload.single('richiestaLavoro[foto]'), function(req, res){
	cloudinary.uploader.upload(req.file.path, function(result) {
		req.body.richiestaLavoro.foto = result.secure_url;

		/*
		req.body.mentorship.author = {
			id: req.user._id,+
			username: req.user.username
		}
		*/
		RichiestaLavoro.create(req.body.richiestaLavoro, function(err, richiestaLavoro){
			if (err){
				console.log(err);
			} else {
				//res.redirect("/richieste" + mentorship.id);
				res.redirect("/richieste");
			}
		});
	}); 
});



// SHOW RICHIESTA

router.get("/richieste/:id", function(req, res){
    RichiestaLavoro.findById(req.params.id, function(err, foundRichiestaLavoro){
        if(err){
            console.log(err);
        } else {
            res.render("./richiesteLavoro/show", {richiestaLavoro: foundRichiestaLavoro})
        }
    })
});

/*
// EDIT RICHIESTA

router.get("/richieste/:id/edit");


// UPDATE RICHIESTA

router.put("/richieste/:id");


// DELETE RICHIESTA

router.delete("/richieste/:id");
*/


module.exports = router;