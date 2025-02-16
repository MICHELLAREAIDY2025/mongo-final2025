const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  event: { type: String, required: true },
  persons: { type: Number, required: true },
  message: { type: String, required: false },
});

module.exports = mongoose.model("Contact", contactSchema);
