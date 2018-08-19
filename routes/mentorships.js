var express = require("express");
var router = express.Router();
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

var Mentorship = require("../models/mentorship");

//INDEX

router.get("/mentorships", function(req, res){
	Mentorship.find({}, function(err, allMentorships){
		if(err){
			console.log(err);
		} else {
			res.render("./mentorships/index", {mentorships: allMentorships});
		}
	})
});




// NEW MENTORSHIP

router.get("/mentorships/new", function(req, res){
	res.render("./mentorships/new");
});




// CREATE MENTORSHIP

router.post("/mentorships", upload.single('mentorship[foto]'), function(req, res){
	cloudinary.uploader.upload(req.file.path, function(result) {
		req.body.mentorship.foto = result.secure_url;

		/*
		req.body.mentorship.author = {
			id: req.user._id,+
			username: req.user.username
		}
		*/
		Mentorship.create(req.body.mentorship, function(err, mentorship){
			if (err){
				console.log(err);
			} else {
				//res.redirect("/mentorships" + mentorship.id);
				res.redirect("/mentorships");
			}
		});
	}); 
});



// SHOW MENTORSHIP

router.get("/mentorships/:id", function(req, res){
	Mentorship.findById(req.params.id, function(err, foundMentorship){
		if(err){
			console.log(err);
		} else {
			res.render("./mentorships/show", {mentorship: foundMentorship})
		}
	})
});

/*
// EDIT MENTORSHIP

router.get("/mentorships/:id/edit");


// UPDATE MENTORSHIP

router.put("/mentorships/:id");


// DELETE MENTORSHIP

router.delete("/mentorships/:id");


*/

module.exports = router;