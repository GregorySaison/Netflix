const express = require("express");
const router = express.Router();
const homeController = require("./controller/homeController");

router.get("/", homeController.titleList);

module.exports = router;
