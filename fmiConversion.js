let fmiEpoc = 1699272000
let unixEpoc = 1699272000000
let factor = unixEpoc / fmiEpoc
let date = new Date(1699272000000)
console.log(date)
console.log(factor)
/** 
* Convert FMI"unix epoc" to ISO-timestamp with time zone
* @summary Multiplies FMI Epoc by 1000 and converts results to ISO string.
* @param {int} fmiEpoc - Timestamp from FMI data called Unix epoc
* @return {str} IDO formatted timestamp with time zone

*/

const fmi2isoTimestamp = (fmiEpoc) => {
    let unixEpoc = 1000 * fmiEpoc;
    let isoTimestamp = new date(unixEpoc);
    return isoTimestamp
}

console.log(fmi2isoTimestamp(1699272600))

module.exports = {
    fmi2isoTimestamp
}