const http = require("http");

let list = [
  { firstName: "Joshua", lastName: "Osorio", email: "joshua@gmail.com" },
  { firstName: "Alina", lastName: "Rojas", email: "alina@gmail.com" },
  { firstName: "Matthew", lastName: "Lopez", email: "matthew@gmail.com" },
];

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  res.write(JSON.stringify(list));
  res.end();
});

server.listen(5566, () => {
  console.log(`Running on Port ${5566}`);
});
