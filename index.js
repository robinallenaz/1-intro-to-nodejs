const http = require('http');
// Define the location and port of the server.
const hostname = '127.0.0.1';
const port = 3000;

// Create the server.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello World!\n');
});

// Start the server.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
