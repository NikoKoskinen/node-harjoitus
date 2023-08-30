// WEB SERVER FOR ELECTRICITY USAGE PLANNING: WEB PAGES AND API
// =============================================================

// LIBRARIES AND MODULES
// =====================

// Use Express as web engine
const express = require("express");
const Express = require(`express`);
// Use Express handlebars as template engine
const { engine } = require("express-handlebars");
const req = require("express/lib/request");
const res = require("express/lib/response");

// EXPRESS APPLICATION SETTINGS
// ----------------------------

// Create the server 
const app =  express();
const PORT =process.env.PORT || 8080;

// Set folder paths is for assets and views for pages
app.use(express.static('public'));
app.set('views', './views');

// Engine settings
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// URL ROUTES
// -----------
// TODO: add date and time as dynamic data for the homepage, is it sensible to use server for creating time values?

app.get('/', (req, res) => {

    let homePageData = {
        'price': 31.25,
        'wind': 3,
        'temperature': 20
    }
    res.render('index', homePageData)

});

app.get('hourly',(req,res)) => {
    res.render('hourly')

};

// START THE LISTENER
app.listen(PORT)
console.log('server started and it will listen TCp port', PORT);