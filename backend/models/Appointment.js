const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  serviceId: String,
  name: String,
  phone: String,
  time: String
});

module.exports = mongoose.model("Appointment", schema);