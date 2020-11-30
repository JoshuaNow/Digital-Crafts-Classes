const http = require("http");
const fs = require("fs");
const port = 6532;
const navigation = `
    <nav>
        <span><a href="?page=home">Home</a></span>
        <span><a href="?page=contact">Contact</a></span>
        <span><a href="?page=about">About</a></span>
    </nav>
`;

const serveFavicon = (req, res) => {
  fs.readFile("favicon-32x32.png", (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end();
    }
    res.end(data);
  });
};

const serveCss = (req, res) => {
  fs.readFile("style.css", "utf8" (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end();
    }
    res.end(data);
  });
};

const makeHeading = (page) => {
  let heading;
  switch (page) {
    case "about":
      heading = `<h1>This is about!</h1>`;
      break;
    case "contact":
      heading = `<h1>This is contact</h1>`;
      break;
    case "foo":
      heading = "<h1>I Pitty THE foo</h1>";
      break;
    default:
      heading = `<h1>This is Home</h1>`;
  }
  return heading;
};
let generateContent = ({
  page,
  navigation,
  heading,
  additional,
  count,
  css,
}) => {
  return `
        <!DOCTYPE html>
        <html>
            <head><title>My Selection:${page}</title>
            ${css}
            </head>
            <body>
                ${navigation}
                ${heading}
                The count is ${count || 0}. I hope you are happy.
                <ul>
                    ${additional.join("")}
                </ul>
                <footer>
                    copyleft 2020
                </footer>
            </body>
        </html>
    `;
};


const server = http.createServer((req, res) => {
  if (req.url == `favicon-32x32.png`) return serveFavicon(res)
  const url = new URL(req.headers.host + req.url)
  
  const server = http.createServer((req, res) => {
    res.writeHead(200);
    const url = new URL(req.headers.host + req.url);
    let page = url.searchParams.get("page");
    let count = url.searchParams.get("count");
    let additional = [];
    url.searchParams.forEach((value, name) => {
      additional.push(`<li>${name}:${value}</li>`);
    });
    let heading = makeHeading(page);
    let foo = "Yo are awesome Clint!";
    let wrapper = generateContent({
      page,
      navigation,
      heading,
      count,
      additional,
      foo,
    });
    res.write(wrapper);
    res.end();
  });
  server.listen(port)
