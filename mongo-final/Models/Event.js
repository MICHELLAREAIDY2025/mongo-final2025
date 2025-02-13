const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  event: { type: String, required: true },
  numberOfPersons: { type: Number, required: true },
  message: { type: String }
});

module.exports = mongoose.model("Event", eventSchema);