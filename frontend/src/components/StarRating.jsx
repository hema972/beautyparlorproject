import { useState, useEffect } from "react";

const StarRating = ({ rating: parentRating = 0, onRate, readOnly = false }) => {
  const [rating, setRating] = useState(parentRating);

  useEffect(() => {
    setRating(parentRating);
  }, [parentRating]);

  return (
    <div>
      {[1,2,3,4,5].map((i) => (
        <span
          key={i}
          style={{
            cursor: readOnly ? "default" : "pointer",
            color: i <= rating ? "#ff1493" : "#ccc",
            fontSize: "24px",
            marginRight: "4px",
          }}
          onClick={() => {
            if (!readOnly) {
              setRating(i);
              onRate(i);
            }
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;