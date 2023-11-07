let fmiEpoc = 1699272000
let unixEpoc = 1699272000000
let factor = unixEpoc / fmiEpoc
let date = new Date(1699272000000)
console.log(date)
console.log(factor)

const fmi2isoTimestamp = (fmiEpoc) => {
    let unixEpoc = 1000 * fmiEpoc;
    let isoTimestamp = new date(unixEpoc);
    return isoTimestamp
}

console.log(fmi2isoTimestamp(1699272600))