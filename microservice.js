// LIBRARIES AND MODULES
// ---------------------

// The pg-pool library for PostgreSQL Server
const Pool = require('pg').Pool;

// The node-cron library to schedule API call to porssisahko.net
const cron = require('node-cron');

// Home made library to access price API from porssisahko.net
const getPrices = require('./getNewPrices');

// APP SETTINGS
// ------------

// Create a new pool for Postgres connections
const pool = new Pool({
  user: 'postgres', // In production allways create a new user for the app
  password: 'Q2werty',
  host: 'localhost', // Or localhost or 127.0.0.1 if in the same computer
  database: 'smarthome',
  port: 5432
});

// GET, PROCESS AND SAVE DATA
// --------------------------

// Use a date variable to keep track of successfull data retrievals
let lastFetchedDate = '1.1.2023'; // Initial value, in production use settings file

// Try to run an operation in 5 minute intervals from 3 to 4 PM
cron.schedule('*/5 15 * * *', () => {
  try {
    let timestamp = new Date(); // Get the current timestamp
    let dateStr = timestamp.toLocaleDateString(); // Take date part of the timestamp

    // If the date of last sucessful fetch is not the current day, fetch data
    if (lastFetchedDate != dateStr) {
      console.log('Started fething price data ');
      // TODO: ADD HERE LOG FILE
      getPrices.fetchLatestPriceData().then((json) => {

        //loop through prices data and pick startDate and price elements
        json.prices.forEach(async (element) => {
          let values = [element.startDate, element.price];

          // Build a SQL clauset to insert values into table
          const sqlClause = 'INSERT INTO public.hourly_price VALUES ($1, $2) ON CONFLICT DO NOTHING RETURNING *'; 
          // Function for running SQL operations asyncronously
          const runQuery = async () => {
            let resultset = await pool.query(sqlClause, values);
            return resultset;
          }
          // Call queryfunction and echo results to console
          runQuery().then((resultset) => console.log(resultset.rows[0]))
          // TODO: ADD HERE ENTRY LOG FILE
        });
      });
      lastFetchedDate = dateStr; // Set fetch date to current date
      console.log('Fetched at', lastFetchedDate)
    } else {
      console.log('Data has been successfully retrieved earlier today');
      // TODO: ADD THIS ENTRY TO THE LOG FILE
    }
  } catch (error) {
    console.log('An error occurred, trying again in 5 minutes until 4 PM');
    // TODO: ERROR ENTRY AND ERROR MESSAGE LOG FILE
  }
});