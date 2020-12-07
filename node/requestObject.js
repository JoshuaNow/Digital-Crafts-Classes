const http = require("http");

const server = http.createServer((req, res) => {
  //A Huge Object with a lot of information
  const url = new URL(req.headers.host + req.url);
  console.log(url);
  console.log(req);
  res.end("look content"); // no matter what url i go to
  let searchObj = url.searchParams;
  console.log(searchObj);
});
server.listen(5566, () => {
  console.log(`Running on Port ${5566}`);
});
