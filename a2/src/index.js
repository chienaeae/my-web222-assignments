const data = require('./data');
const { extractSpeciesNames } = require('./observations');

let result = extractSpeciesNames(data);
console.log(result);
