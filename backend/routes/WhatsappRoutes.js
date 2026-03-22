const express = require("express");
const router = express.Router();

const whatsappNumber = process.env.WHATSAPP_NUMBER; // secure from .env

router.post("/send", (req, res) => {
  const { name, phone, time, serviceType } = req.body;

  const msg = `New Booking:
Name: ${name}
Phone: ${phone}
Time: ${time}
Service: ${serviceType}`;

  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;

  res.json({ waUrl });
});

module.exports = router;