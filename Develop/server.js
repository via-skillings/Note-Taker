const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Require route files
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');

// Route handlers
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
