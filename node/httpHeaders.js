// https://github.com/DigitalCraftsStudents/Instructor-Notes-Clint/blob/master/Node/6-http-module-headers.md

const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.writeHead(200);

  res.setHeader("X-Foo-Header", "RandomData/Random");
  res.setHeader("X-My-Header-Not-Real", "MoreRandom");
  res.end("Sent. Check the network!");
});

server.listen(5566, () => {
  console.log(`Running on Port ${5566}`);
});
