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

const { error } = require('console');
const fs = require('fs');

const add2log = (entry, fileName) => {
    const isoTimeStamp = new Date().toISOString();
    const logRow = entry + '@' + isoTimeStamp
    fs.appendFile(fileName, logRow, (err) => {
        if (err) {
            console.log(err);
        }
    })
};

// TODO: Create function to do this ie. Create log message and timestamp


add2log('this is an informational message', 'dataoperations.log')

module.exports = {
    add2log
}

