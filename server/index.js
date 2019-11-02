// General
const express = require('express');
const http = require('http');
const app = express();

// Services
const imageProcessing = require('./services/imageProcessing');

// Middleware
const middleware = require('./util/middleware');
app.use(middleware);

// Router
const appRouter = require('./routes');
app.use('/', appRouter);

// Start server
const httpServer = http.createServer(app);
httpServer.listen(3000, () => {
  console.log('Server running at 3000');
});

// Services
imageProcessing.initialize();
