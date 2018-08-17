var express         = require("express"),
     app            = express(),
     bodyParser     = require("body-parser"),
     mongoose       = require("mongoose"),
     flash          = require("connect-flash"),
     //seedDB         = require("./seeds"),
     passport       = require("passport"),
     LocalStrategy  = require("passport-local"),
     methodOverride = require("method-override")


/* TOGLI COMMENTO SOLO QUANDO COMPLETATI
var mentorshipsRoutes = require("./routes/mentorships"),
    offerteRoutes = require("./routes/offerteLavoro"),
    richiesteRoutes = require("./routes/richiesteLavoro"),
    authRoutes = require("./routes/index");
*/

// DATABASE

//seedDB();

/*
var url = process.env.DATABASEURL || "mongodb://localhost:7
/yelp_camp"

mongoose.connect(url, {useNewUrlParser: true });
//mongoose.connect("mongodb://lollospring:polifemo0@ds113452.mlab.com:13452/yelpcamp", {useNewUrlParser: true });

*/

var url = "mongodb://localhost:27017/alumniUNITN"

mongoose.connect(url, {useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());


app.set("view engine", "ejs");

var authRoutes = require("./routes/index");
var richiesteRoutes = require("./routes/richiesteLavoro");

var RichiestaLavoro = require("./models/richiestaLavoro.js")
var OffertaLavoro = require("./models/offertaLavoro.js")
var Mentorship = require("./models/mentorship.js")
var Alumno = require("./models/alumno.js")






//http://localhost:3000/



RichiestaLavoro.create(
    {   
            nome: "Antonio",
            congome: "Ress",
            foto: "https://www.google.it/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi-i5Hkq_TcAhXH66QKHT8AA_AQjRx6BAgBEAU&url=https%3A%2F%2Ftwitter.com%2F_antoniomorelli&psig=AOvVaw2WeArTvnEQvaB7kWxaLBkh&ust=1534604063522514",
            corsoLaurea: "Fisica",
            annoLaurea: "2007",
            interessi: "Quantum Computing",
            cv: "https://drive.google.com/file/d/0B5C8gMU1b5HjblZOX3c2WDVDR28/view?usp=sharing",
            titoloTesi: "Particelle nell'aria",
            contattoMail: "ress@gmail.com",
            contattoTelegram: "@ressMe"
            
    }, function(err, richiestaLavoro){
        if (err){
            console.log(err);
        } else {
            console.log("Newly created richiestaLavoro: ");
            console.log(richiestaLavoro)
        }
});

app.listen(3000, function () {
  console.log('alumniUNITN listening on port 3000!');
});


app.use(authRoutes);
app.use(richiesteRoutes);


/*


// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});


app.use(authRoutes);
app.use(campgroundRoutes);
app.use(commentsRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});



*/