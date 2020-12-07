const server = http.createServer((req, res) => {
  res.setStatus = 200;

  //constructing the url object
  const url = new URL(req.headers.host + req.url);

  //if we know what we are looking for we can use get

  let page = url.searchParams.get("page");
  let count = url.searchParams.get("count");

  let content = "";
  switch (page) {
    case "about":
      content += `<h1>This is about!<h1>`;
      break;
    case "contact":
      content += `<h1>This is contact</h1>`;
      break;
    default:
      content += `<h1>This is Home</h1>`;
  }
  content += `<div>The Count is ${count || 0}</div>`;

  res.write(content);
  res.end();
});
