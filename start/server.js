const http = require("http");

const PORT = 8080;

const server = http.createServer((req, res) => {
  setTimeout(() => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      console.log(`Received body: ${body}`);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("Hello, World!");
      res.end();
    });
  }, 100);
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
