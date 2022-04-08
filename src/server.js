const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

const routerApi = require("./server/routes");
/**
 * CORS middleware
 * https://developer.mozilla.org/es/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
 */
function cors(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
}

// middlewares
app.use(cors);
app.use(express.urlencoded({ extended: true })); // To expect JSON as body
app.use(express.json()); // To parse the incoming requests with JSON payloads


// ruter
routerApi(app);
// Creating our first GET API
app.use(express.static(path.join(__dirname, "..", 'build')));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// Starting our API server
app.listen(port, () => {
  console.log(`API served on http://localhost:${port}`);
});
