var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    res.render("landing");
});


module.exports = router;

// aggiungere routes legate ad autenticazione


router.get("/register");

router.post("/register");

router.get("/login");

router.post("/login");

router.get("/logout");