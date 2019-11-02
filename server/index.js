// General
const express = require("express");
const http = require("http");
const app = express();

// External
const fs = require("fs");

// Internal
const config = require("./util/config");

// Middleware
const middleware = require("./util/middleware");
app.use(middleware);

// Router
const appRouter = require("./routes/app/");
app.use("/", appRouter);

// Start server
const httpServer = http.createServer(app);
httpServer.listen(3000, () => {
  console.log("Server running at 3000");
});
