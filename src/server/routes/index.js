const express = require("express");
const shortenerRouter = require("./shortener.router");
const secretRouter = require("./secret.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  //   rutas aqui
  // router.use("/[ruta...]", [router])
  router.use("/urlshrt", shortenerRouter);
  router.use("/secret", secretRouter);
}

module.exports = routerApi;
