import React from "react";
import beautyImage from "./homee.jpeg";

export default function Home() {
  return (
    <>
      <style>{`
        .home-container {
          height: 100vh;
          width: 100%;
          background-image: url(${beautyImage});
          background-size: cover;
          background-position: center;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .home-card {
          text-align: center;
          padding: 50px;
          max-width: 750px;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          animation: fadeUp 1s ease-in-out;
        }

        .home-title {
          font-size: 36px;
          color: #e91e63;
          font-family: "Playfair Display", serif;
        }

        .home-subtitle {
          font-size: 18px;
          color: #444;
          margin-top: 10px;
          animation: fadeUp 1.5s ease-in-out;
        }

        .home-text {
          font-size: 16px;
          color: #333;
          margin-top: 10px;
          line-height: 1.6;
          animation: fadeUp 2s ease-in-out;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Sparkles */
        .sparkles span {
          position: absolute;
          font-size: 20px;
          animation: float 6s infinite ease-in-out;
          opacity: 0.7;
        }

        .sparkles span:nth-child(1) { top: 10%; left: 10%; }
        .sparkles span:nth-child(2) { top: 20%; right: 15%; }
        .sparkles span:nth-child(3) { bottom: 15%; left: 20%; }
        .sparkles span:nth-child(4) { bottom: 10%; right: 10%; }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .home-card {
            padding: 25px;
            margin: 20px;
          }

          .home-title {
            font-size: 26px;
          }

          .home-subtitle {
            font-size: 16px;
          }

          .home-text {
            font-size: 14px;
          }
        }
      `}</style>

      <div className="home-container">
        
        {/* Sparkles */}
        <div className="sparkles">
          <span>✨</span>
          <span>💄</span>
          <span>✨</span>
          <span>💖</span>
        </div>

        {/* Content */}
        <div className="home-card">
          <h1 className="home-title">
            Welcome to Hema Beauty Parlour 💄
          </h1>

          <p className="home-subtitle">
            Your beauty, our passion ✨
          </p>

          <p className="home-text">
            We enhance your natural beauty with care, professionalism, and love.
            Your trust is our priority, and we always deliver the best salon experience.
          </p>
        </div>

      </div>
    </>
  );
}