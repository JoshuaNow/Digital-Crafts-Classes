const http = require("http");
const fs = require("fs");
//

//sometimes you will see it look like this
const app = require("express")();
/*
     ^^ same as above
      const express = require("express")
      const app = require("app")
  */
const send404 = (req, res) => {
  res.status(404);
  res.send(_404Content);
};

const sendFavicon = (req, res) => {
  fs.readFile("favicon-32x32.png", (err, data) => {
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

const serveContent = (title, content) => `
    <!DOCTYPE html>
    <html> 
        <head> 
            <title>${title}</title>
        </head>
        <body>
            <h1>${title}</h1>
            <div>${content}</div>
        </body>
    </html>
`;

const serveHome = (req, res) => {
  res.send(serveContent("Home"));
};
app.get("/favicon.ico", sendFavicon);
app.get("/", serveHome);
app.get("/home", serveHome);
app.get("/about", (req, res) =>
  res.send(serveContent("About", "Lets give them something to talk about.")),
);
app.get("/contact", (req, res) => res.send(serveContent("Contact")));
app.get("*", send404);

const server = http.createServer(app);

server.listen(3322);
