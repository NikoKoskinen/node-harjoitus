/*const fs = require('fs');

const timestamp = new Date();
const isoTimeStamp = timestamp.toISOString();
let operation = 'Data Fetch Operation';
let status = 'processed succesfully';
let entry = operation + ' ' + status + '@' + isoTimeStamp + '\n';

console.log(entry)

fs.appendFile('dataOperations.log', entry, (err) => {
    if (err){
        console.log(err)
    }
})
*/

// A TOOL FOR ADDING MESSAGES
// ==========================

// LIBRARIES
// ----------
const fs = require('fs');

// FUNCTION DEFINITIONS
// -------------------

// Function gets message entry and log file name as arguments
const add2log = (entry, fileName) => {

    // Create a ISO formatted timestamp using Date class
    const isoTimeStamp = new Date().toISOString();

    // Construct a log entry with timestamp and a new line character
    const logRow = entry + '@' + isoTimeStamp + '\n'

    // Append entry to a log file or give an error
    fs.appendFile(fileName, logRow, (err) => {
        if (err) {
            console.log(err);
        }
    })
};

// EXPORT
// ------

module.exports = {
    add2log
}
