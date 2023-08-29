// WEB SERVER FOR ELECTRICITY USAGE PLANNING: WEB PAGES AND API
// =============================================================

// LIBRARIES AND MODULES
// =====================

// Use Express as web engine
const express = require("express");
const Express = require(`express`);
// Use Express handlebars as template engine
const { engine } = require("express-handlebars");

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


// START THE LISTENER
app.listen(PORT)
console.log('server started and it will listen TCp port', PORT);