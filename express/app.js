const http = require("http");
const fs = require("fs");

//sometimes you will see it look like this
const app = require("express")();
/*
     ^^ same as above
      const express = require("express")
      const app = require("app")
  */

const sendFavicon = (req, res) => {
  fs.readFile("./favicon-32x32.png", (err, data) => {
    if (err) return res.send(err);
    res.send(data);
  });
};

const _404Content = `
  <!DOCTYPE html>
  <html> 
      <head> 
          <title>An Error you have found</title>
      </head>
      <body>
          <h1>404</h1>
          <blockquote>"An Error you have found" - Yoda
          </blockquote>
      </body>
  </html>
  `;
const send404 = (req, res) => {
  res.status(404);
  res.send(_404Content);
};

const serveHome = (req, res) => {
  res.send("<h1>You are Home</h1>");
};

//favicon route
app.get("/favicon.ico", sendFavicon);

//home route
app.get("/", serveHome);
app.get("/home", serveHome);

//404 route
app.get("*", send404);

const server = http.createServer(app);

server.listen(3322);
