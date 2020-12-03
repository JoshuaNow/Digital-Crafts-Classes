const employees = require("/Users/joshualopez/DigitalCrafts/2020-10-Immersive/02-json-obj-arrays/employees-array.json");
const employee = employees[0];

const employeeBirthdayFunction = () => employee.birthDate;

const jobAreaFunction = () => employee.jobArea;

// console.log(Object.keys(employee)); this is only to see ALL the key values of the

const getValue = (key) => employee[key];

console.log(getValue("prefix"));

console.log(employeeBirthdayFunction());
