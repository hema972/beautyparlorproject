const Review = require("../models/Review");

// ADD review
exports.addReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET reviews
exports.getReviews = async (req, res) => {
  try {
    const data = await Review.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};