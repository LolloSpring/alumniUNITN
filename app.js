var express         = require("express"),
     app            = express(),
     bodyParser     = require("body-parser"),
     mongoose       = require("mongoose"),
     flash          = require("connect-flash"),
     //seedDB         = require("./seeds"),
     passport       = require("passport"),
     LocalStrategy  = require("passport-local"),
     methodOverride = require("method-override")


app.set("view engine", "ejs");

var authRoutes = require("./routes/index");

/*
app.get('/', function (req, res) {
  res.render('landing');
});
*/

app.use(authRoutes);

app.listen(3000, function () {
  console.log('alumniUNITN listening on port 3000!');
});

//http://localhost:3000/