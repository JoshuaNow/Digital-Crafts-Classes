const os = require("os");

console.log(os.freemem);
console.log(os.networkInterfaces);
console.log(os.userInfo);

function myFunc() {
  let arr = [os.platform(), os.homedir(), os.hostname()];
  return arr;
}

let items = myFunc();
console.log(items);
