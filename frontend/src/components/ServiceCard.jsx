import axios from "axios";
import StarRating from "./StarRating";

const ServiceCard = ({ s }) => {

  const rate = async (r)=>{
    await axios.post(`https://beautyparlorproject.onrender.com/api/services/rate/${s._id}`, {rating:r});
    window.location.reload();
  };

  const book = async ()=>{
    await axios.post("/https://beautyparlorproject.onrender.com/api/appointments", {
      name:"User",
      phone:"1234567890",
      service:s.name,
      date:"today",
      time:"now"
    });

    window.open(`https://wa.me/91XXXXXXXXXX?text=I want ${s.name}`);
  };

  return (
    <div style={{
      border:"1px solid #ddd",
      padding:"15px",
      margin:"10px",
      borderRadius:"10px",
      width:"250px"
    }}>
      <h3>{s.name}</h3>
      <p>₹{s.price}</p>

      <StarRating value={s.avg} />

      {[1,2,3,4,5].map(i=>(
        <button key={i} onClick={()=>rate(i)}>★</button>
      ))}

      <br/>
      <button onClick={book}>📲 Book</button>
    </div>
  );
};

export default ServiceCard;