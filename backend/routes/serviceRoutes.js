const express = require("express");
const router = express.Router();

const { getServices, addRating } = require("../controllers/serviceController");

router.get("/", getServices);
router.post("/rate/:id", addRating);

module.exports = router; 