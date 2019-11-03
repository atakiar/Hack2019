// General
const express = require('express');
const http = require('http');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));


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

// require('./__tests__/test').run();