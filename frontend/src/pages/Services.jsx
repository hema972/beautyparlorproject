import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Services.css";

// ✅ Import local images
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
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://beautyparlorproject.onrender.com/api/services")
      .then(res => {
        const merged = res.data.map(s => ({ ...s }));

        const pedicure = merged.find(s => s.name.toLowerCase() === "pedicure");
        const manicure = merged.find(s => s.name.toLowerCase() === "manicure");

        if (pedicure && manicure) {
          pedicure.items = [...pedicure.items, ...manicure.items];
          pedicure.name = "Pedicure + Manicure";

          const filtered = merged.filter(
            s => s.name.toLowerCase() !== "manicure"
          );
          setServices(filtered);
        } else {
          setServices(merged);
        }
      })
      .catch(err => console.error("Failed to fetch services:", err));
  }, []);

  return (
    <div className="services-container">
      {services.length === 0 ? (
        <p>Loading services...</p>
      ) : (
        services.map(service => (
          <div className="service-card" key={service._id}>
            
            {/* ✅ Image */}
            <img
              src={getImage(service.name)}
              alt={service.name}
              className="service-img"
            />

            {/* ✅ Title */}
            <h2 className="service-category">{service.name}</h2>

            {/* ✅ Items */}
            <div className="service-items">
              {service.items.map((item, index) => (
                <p key={index}>
                  {index + 1} {item.name} - ₹{item.price}
                </p>
              ))}
            </div>

            {/* ✅ Button */}
           <button
  className="book-btn"
  onClick={() =>
    navigate(`/book/${service._id}`, { state: { items: service.items } })
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

// ✅ Function to map service name → local image
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