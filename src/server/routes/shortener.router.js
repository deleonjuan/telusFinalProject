const express = require("express");
const router = express.Router();

const shortenerService = require("../services/shortener.service");
const service = new shortenerService();

router.get("/:hash", (req, res) => {
  const { hash } = req.params;
  const url = service.findOne(hash);
  res.json(url);
});

router.post("/", (req, res) => {
  const body = req.body;
  const newUrl = service.create(body);
  res.json(newUrl);
});

module.exports = router;
