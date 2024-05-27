const http = require('http');

// Define the server address and port number
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

// Create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// Start the server and listen on the defined port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});