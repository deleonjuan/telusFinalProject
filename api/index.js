const express = require("express");
const app = express();
const port = 5000;
const path = require('path');
/**
 * CORS middleware
 * https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
 */
function cors(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
}

// Using the middlewares
app.use(cors);
app.use(express.urlencoded({ extended: true })); // To expect JSON as body
app.use(express.json()); // To parse the incoming requests with JSON payloads

// Creating our first GET API
app.get("*", (req, res) => {
  res.status(200).send("Hello World!");
    // res.sendFile(path.join(__dirname, '..', 'front', 'build', 'index.html'));
});

// Starting our API server
app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
