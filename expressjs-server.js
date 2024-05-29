// server.js

const express = require('express');
const app = express();
const port = 3000; // You can change the port number as needed

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route with parameters
app.get('/hello/:name', (req, res) => {
  res.send(`Hello, ${req.params.name}!`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
