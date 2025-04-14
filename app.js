const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, This is Sheetal!');
});

server.listen(8080);
