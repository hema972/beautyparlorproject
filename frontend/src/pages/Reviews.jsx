import { useState, useEffect } from "react";
import axios from "axios";
import StarRating from "../components/StarRating";
import "./Reviews.css";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchReviews();
    setTimeout(() => setShow(true), 100); // ✨ animation trigger
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await axios.get(
        "https://beautyparlorproject.onrender.com/api/reviews"
      );
      setReviews(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || rating === 0 || !comment) {
      alert("Please fill all fields and give a rating!");
      return;
    }

    try {
      const res = await axios.post(
        "https://beautyparlorproject.onrender.com/api/reviews",
        { name, email, rating, comment }
      );

      setReviews([res.data, ...reviews]);

      setName("");
      setEmail("");
      setRating(0);
      setComment("");
    } catch (err) {
      console.log(err);
    }
  };

  const getInitials = (name = "") => {
    return name
      .split(" ")
      .filter(Boolean)
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className={`reviews-container ${show ? "show" : ""}`}>
      <h2>Customer Reviews</h2>

      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <StarRating rating={rating} onRate={setRating} />

        <textarea
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button type="submit">Submit Review</button>
      </form>

      <div className="reviews-list">
        {reviews.map((r) => (
          <div key={r._id} className="review-card">
            <div className="review-header">
              <div className="avatar">{getInitials(r.name)}</div>

              <div>
                <h4>{r.name}</h4>
                <p className="email">{r.email}</p>
              </div>
            </div>

            <StarRating rating={r.rating} readOnly />
            <p className="comment">{r.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}