import { useState } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";

export default function Book() {
  const { id } = useParams();
  const location = useLocation();
  const serviceItems = location.state?.items || [];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    time: "",
    serviceType: ""
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!form.name || !form.phone || !form.time || !form.serviceType) {
      alert("Please fill all fields!");
      return;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      alert("Enter a valid 10-digit phone number");
      return;
    }

    try {
      setLoading(true);

      // 1️⃣ Save appointment
      await axios.post(
        "https://beautyparlorproject.onrender.com/api/appointments",
        {
          serviceId: id,
          ...form
        }
      );

      // 2️⃣ Get WhatsApp URL
      const response = await axios.post(
        "https://beautyparlorproject.onrender.com/api/whatsapp/send",
        form
      );

      console.log("WA URL:", response.data.waUrl);

      // 3️⃣ Open WhatsApp (works on mobile + desktop)
      const waUrl = response.data.waUrl;

      const newWindow = window.open(waUrl, "_blank");

      // fallback for mobile
      if (!newWindow) {
        window.location.href = waUrl;
      }

      alert("Appointment Booked!");
      setForm({ name: "", phone: "", time: "", serviceType: "" });

    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Book Appointment</h2>

      <input
        style={styles.input}
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        style={styles.input}
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <input
        style={styles.input}
        placeholder="Time"
        value={form.time}
        onChange={(e) => setForm({ ...form, time: e.target.value })}
      />

      <select
        style={styles.input}
        value={form.serviceType}
        onChange={(e) =>
          setForm({ ...form, serviceType: e.target.value })
        }
      >
        <option value="">Select Service</option>
        {serviceItems.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name} - ₹{item.price}
          </option>
        ))}
      </select>

      <button style={styles.button} type="submit" disabled={loading}>
        {loading ? "Booking..." : "Confirm Booking"}
      </button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff"
  },
  heading: {
    textAlign: "center",
    marginBottom: "10px"
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#ff1493",
    color: "#fff",
    cursor: "pointer"
  }
};