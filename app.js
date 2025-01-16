// app.js

const http = require('http'); // Import the built-in HTTP module

// Create a server that responds to requests
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Set the response status code
  res.setHeader('Content-Type', 'text/plain'); // Set the content type of the response
  res.end('Hello, world!'); // Send the response body
});

// Specify the port and hostname for the server
const port = 3000;
const hostname = '0.0.0.0'; // Allow external access by binding to all interfaces

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
