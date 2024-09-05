// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use the comments router
const comments = require('./comments');
app.use('/comments', comments);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});