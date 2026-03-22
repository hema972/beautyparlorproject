// backend/routes/reviewRoutes.js
const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// GET all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 }); // latest first
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST new review
router.post("/", async (req, res) => {
  try {
    const { name, email, rating, comment } = req.body;
    const review = new Review({ name, email, rating, comment });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: "Failed to add review" });
  }
});

module.exports = router;