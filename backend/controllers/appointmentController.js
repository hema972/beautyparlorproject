const Appointment = require("../models/Appointment");

exports.createAppointment = async (req, res) => {
  const data = await Appointment.create(req.body);
  res.json(data);
};
// Get all appointments
exports.getAppointments = async (req, res) => {
  try {
    const data = await Appointment.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};