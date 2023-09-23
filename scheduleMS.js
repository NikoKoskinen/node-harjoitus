/*A MICROSERFICE FOR SCHEDULING DATA IMPORTS FROM PORSSISAHKO.NET API
New data is avaible daily at 12.00 UTC local time or 15.00 when
daylight saving time or summer time is on */

// LIBRARIES AND MODULES

const cron = require('node-cron') // The scheduling library

// Run a function every day at 15:30
cron.schedule('30 15  * * *',() => {
    console.log('this will be executed daily at 15:30')
});

// A test to check scheduler: run it every minute
cron.schedule('* * * * *',() => {
    console.log('this will be executed every minute')
});

// A test to check scheduler: run it every hour
cron.schedule('0 * * * *',() => {
    console.log('this will be executed every hour')
});

// Running the task every full hour according to a list
cron.schedule('0 15,19,22 * * * *',() => {
    console.log('this will be executed at 3,7 and 10 PM')
});

// Running the task hoyrly between 15 and 20
cron.schedule('0 15-22 * * * *',() => {
    console.log('this will be executed at every hour from 3 to 8 PM')
});

// A test to check scheduler: run it every 5 minutes
cron.schedule('*/5 * * * *',() => {
    console.log('this will be executed every 5 minutes interval')
});

// Use error handling when running a task
cron.schedule('30 15 * * *', () => {
   try { 
        console.log('this will be executed daily at 15:30')}
    catch (error) {
        console.log('An error occurred') }
    });

    // TODO: FIX counter or flag check the logic of error counter
// Use a counter variable to keep record of successfull operation
let counter = 0 // Set the initial value

// Check if the counter is to run an operation in 5 minute intervals frpm 3 to 4 PM
cron.schedule('*/5 15 * * *', () => { // Initialize flag to true
    try { 
        // Check if the flag is still true to run the operation
        if (counter == 0) {
            console.log('this will be executed every 5 mins at 15:00 until 15:55')};
            counter =+ 1; // If successfull operation set the counter to the initial value
        }
     catch (error) {
         console.log('An error occurred');

         counter  } 
         if (counter >= 12) {
            counter = 0;
         }
     });
 













