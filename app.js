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

//Route to homepage 
app.get('/', (req, res) => {

    // handlebars needs a key to show  data on page, jston is a good way to send it
    let homePageData = {
        'price': 31.25,
        'wind': 3,
        'temperature': 20
    }

    // Render index. Handlebars and send dynamic data to the page
    res.render('index', homePageData)

});

// Route to hourly data page
app.get('/hourly', (req, res) => {

    // Data will be presented on a table. To loop all rows we need a key for table and for column data
    let hourlyPageData = { 'tableData': [
        {'hour': 13,
        'price': 55.65},
        {'hour': 14,
        'price': 35.65},,
        {'hour': 15,
        'price': 77.65},
        {'hour': 16,
        'price': 9.65}
    ]
    };

    res.render('hourly',hourlyPageData)

});

// START THE LISTENER
app.listen(PORT)
console.log('server started and it will listen TCP port', PORT);