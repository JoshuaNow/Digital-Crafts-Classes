const http = require("http");
const express = require("express");
const app = express();
const port = 4455;

const server = http.createServer(app);
let people = require("./people.json");

app.get("/", (req, res) => {
  res.send("<h1>some content</h1>");
});

//this will send ALL of the People.

app.get("/api/people", (req, res) => {
  res.send(people);
});

app.get("/api/p");

server.listen(port);
