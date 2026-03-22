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

// new WhatsApp route
app.use("/api/whatsapp", require("./routes/WhatsappRoutes"));

// DB connect
connectDB();

app.listen(5000, () => console.log("Server running on 5000"));