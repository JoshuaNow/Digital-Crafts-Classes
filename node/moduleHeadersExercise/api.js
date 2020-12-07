const http = require("http");
const htmlContent = `
      <!DOCTYPE html>
      <html>
          <head>
              <title>fetch from another source</title>
          </head>
          <body>
              <h1>This is a full HTML document!</h1>
              <ul>
                  <li>It's Valid!</li>
                  <li>It's From Node!</li>
                  <li>It's Just a String!</li>
              </ul>
              <script>
                  fetch('http://local:5566')
                  .then(response => response.json())
                  .then(data => console.log(data));
              </script>
          </body>
      </html>
  `;

const server = http.createServer((request, response) => {
  response.statusCode = 200;

  let url = new URL(request.headers.host + request.url);

  let name = url.searchParams.get("name");
  let age = url.searchParams.get("age");

  let content = "";
  switch (name) {
    case "Joshua":
      content += `<h1>This is Joshua's Page!<h1>`;

      break;
    case "firstname":
      content += `      <!DOCTYPE html>
      <html>
          <head>
              <title>fetch from another source</title>
          </head>
          <body>
              <h1>This is a full HTML document!</h1>   
              <script>
                  fetch('http://localhost:5566')
                  .then(response => response.json())
                  .then(data => { console.log(data)
                    data.forEach( (person) => {
                      console.log(person.firstName)
                    let li = document.createElement("li")
                    let ul = document.createElement("ul")
                    li.innerText = person.firstName
                    ul.append(li)
                    document.body.append(ul)

                    })
                  });
                  
                  

                  
              </script>
          </body>
      </html>
  `;
      break;
    case "Matthew":
      content += `<h1>This is Matthew's Page!</h1>`;
      break;
    default:
      content += `<h1>This is Home</h1>`;
  }
  content += `<div>Age is ${age || 18}</div>`;

  response.write(content);
  response.end();
});

server.listen(3344, () => {
  console.log("the server is up and running and listening to on port 3344");
});
