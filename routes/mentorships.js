var express = require("express");
var router = express.Router();

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



/*
// CREATE MENTORSHIP

router.post("/mentorships");


// SHOW MENTORSHIP

router.get("/mentorships/:id");


// EDIT MENTORSHIP

router.get("/mentorships/:id/edit");


// UPDATE MENTORSHIP

router.put("/mentorships/:id");


// DELETE MENTORSHIP

router.delete("/mentorships/:id");


*/

module.exports = router;