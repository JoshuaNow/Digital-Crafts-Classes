const US = require("/Users/joshualopez/DigitalCrafts/2020-10-Immersive/02-json-obj-arrays/places.json");

console.log(US.Georgia.Atlanta["East Lake"]["Chris' House"]); // the reason that we have to use these in brackets is because there are spaces in the keys of the object cannot be used with ".east lake this cannot be done"

// const cityNames = () => US.Georgia;

let GeorgiaKeys = Object.keys(US.Georgia);

const georgiaCities = () => GeorgiaKeys;

console.log(georgiaCities());

const betterFuncForCities = (state) => Object.keys(US[state]);

console.log(betterFuncForCities("Texas"));
