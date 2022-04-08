const express = require("express");
const router = express.Router();

const SecretService = require("../services/secret.service");
const service = new SecretService();

router.get("/:hash", (req, res) => {
  const { hash } = req.params;
  const secret = service.findOne(hash);
  res.json(secret);
});

router.post("/", (req, res) => {
  const body = req.body;
  const newSecret = service.create(body);
  res.json(newSecret);
});

module.exports = router;
