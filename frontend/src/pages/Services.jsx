import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Services.css";

// images
import facialImg from "./facial.png";
import bleachImg from "./bleach.png";
import waxImg from "./wax.png";
import haircutImg from "./HairCut.png";
import pedicureImg from "./pedicure.png";
import makeupImg from "./makeup.png";
import mehendiImg from "./mehendi.png";
import massageImg from "./headmassage.png";
import jewelryImg from "./jewelery.png";

export default function Services() {
  const [services, setServices] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://beautyparlorproject.onrender.com/api/services")
      .then((res) => {
        const merged = res.data.map((s) => ({ ...s }));

        const pedicure = merged.find(
          (s) => s.name.toLowerCase() === "pedicure"
        );
        const manicure = merged.find(
          (s) => s.name.toLowerCase() === "manicure"
        );

        if (pedicure && manicure) {
          pedicure.items = [...pedicure.items, ...manicure.items];
          pedicure.name = "Pedicure + Manicure";

          const filtered = merged.filter(
            (s) => s.name.toLowerCase() !== "manicure"
          );
          setServices(filtered);
        } else {
          setServices(merged);
        }

        setTimeout(() => setShow(true), 100); // ✨ animation trigger
      })
      .catch((err) => console.error("Failed to fetch services:", err));
  }, []);

  return (
    <div className={`services-container ${show ? "show" : ""}`}>
      {services.length === 0 ? (
        <p className="loading">Loading services...</p>
      ) : (
        services.map((service) => (
          <div className="service-card" key={service._id}>
            <img
              src={getImage(service.name)}
              alt={service.name}
              className="service-img"
            />

            <h2 className="service-category">{service.name}</h2>

            <div className="service-items">
              {service.items.map((item, index) => (
                <p key={index}>
                  {index + 1} {item.name} - ₹{item.price}
                </p>
              ))}
            </div>

            <button
              className="book-btn"
              onClick={() =>
                navigate(`/book/${service._id}`, {
                  state: { items: service.items },
                })
              }
            >
              Book Now
            </button>
          </div>
        ))
      )}
    </div>
  );
}

// image mapping
function getImage(name) {
  switch (name.toLowerCase()) {
    case "facial":
      return facialImg;
    case "bleach":
      return bleachImg;
    case "wax":
      return waxImg;
    case "haircut":
      return haircutImg;
    case "pedicure + manicure":
      return pedicureImg;
    case "head massage":
      return massageImg;
    case "mehendi":
      return mehendiImg;
    case "rent jewelry set":
      return jewelryImg;
    case "makeup":
      return makeupImg;
    default:
      return facialImg;
  }
}