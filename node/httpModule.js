const http = require("http");
// stop the server and reset the server to get updates

const htmlContent = `
      <!DOCTYPE html>
      <html>
          <head>
              <title>HTML Content from Node</title>
          </head>
          <body>
              <h1>This is a full HTML document!</h1>
              <ul>
                  <li>It's Valid!</li>
                  <li>It's From Node!</li>
                  <li>It's Just a String!</li>
              </ul>
              <script>
                  console.log("It's like magic")
              </script>
          </body>
      </html>
  `;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.end(htmlContent);
});

server.listen(3344, () => {
  console.log("the server is up and running and listening to on port 3344");
});
