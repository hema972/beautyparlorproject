require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/services", require("./routes/serviceRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));
app.use("/api/reviews", require("./routes/reviewRoutes"));
app.use("/api/whatsapp", require("./routes/whatsappRoutes"));

// DB connect
connectDB();

// ✅ FIXED PART
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));