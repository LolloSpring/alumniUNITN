var express         = require("express"),
     app            = express(),
     bodyParser     = require("body-parser"),
     mongoose       = require("mongoose"),
     flash          = require("connect-flash"),
     //seedDB         = require("./seeds"),
     passport       = require("passport"),
     LocalStrategy  = require("passport-local"),
     methodOverride = require("method-override")


// DATABASE

//seedDB();

/*
var url = process.env.DATABASEURL || "mongodb://localhost:7
/yelp_camp"

mongoose.connect(url, {useNewUrlParser: true });

*/
mongoose.connect("mongodb://lollospring:sHANGHAI95+@ds125392.mlab.com:25392/alumniunitn", {useNewUrlParser: true });



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
var offerteRoutes = require("./routes/offerteLavoro");
var mentorshipsRoutes = require("./routes/mentorships")
var authRoutes = require("./routes/index");

var RichiestaLavoro = require("./models/richiestaLavoro.js")
var OffertaLavoro = require("./models/offertaLavoro.js")
var Mentorship = require("./models/mentorship.js")
var User = require("./models/alumno.js")



RichiestaLavoro.create(
    {   
            nome: "Antonio",
            congome: "Ress",
            foto: "http://simonenolgo.com/wp/wp-content/themes/simonenolgo/images/profilo.jpg",
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


OffertaLavoro.create(
    {   
            nome: "Lucia",
            cognome: "Bisesti",
            foto: "http://donnabennett.ca/images/donna_cv.jpg",
            corsoLaurea: "Economia",
            annoLaurea: "2012",
            professione: "Head of HR",
            contattoMail: "bisesti@gmail.com",
            contattoTelegram: "@bisestiMe",
            nomeAzienda: "Ferrero",
            descrizionePosizione: "Social Media Manager",
            fotoAzienda: "https://www.mixerplanet.com/wp-content/uploads/2017/09/ferrero.jpg",
            tipoContratto: "Tempo determinato 1 anno",
            salario: "45K-55K",
            periodo: "Novembre 2018 - Novembre 2019",
            luogo: "Padova"
            
    }, function(err, offertaLavoro){
        if (err){
            console.log(err);
        } else {
            console.log("Newly created offertaLavoro: ");
            console.log(offertaLavoro)
        }
});


Mentorship.create(
  {
          nome: "Luca",
          cognome: "Bassetti",
          foto: "http://larc.it/wp-content/uploads/2016/09/uomo-sorriso.jpg",
          corsoLaurea: "Storia",
          annoLaurea: "1986",
          professione: "Direttore Giornale",
          azienda: "Giornale L'Acqua",
          luogo: "Palermo",
          interessi: "motori, Romani",
          cv: "https://drive.google.com/file/d/0B5C8gMU1b5HjblZOX3c2WDVDR28/view?usp=sharing",
          titoloTesi: "Romani e la scrittura",
          contattoMail: "bassetti@gmail.com",
          contattoTelegram: "@bassettiMe",
          mezzoContattoPreferito: "Telegram",
          quantoContattoProferito: "Tra le 10 e le 20 nei finesettimana"       
})



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
app.use(richiesteRoutes);
app.use(offerteRoutes);
app.use(mentorshipsRoutes);

app.listen(3000, function () {
  console.log('alumniUNITN listening on port 3000!');
});



