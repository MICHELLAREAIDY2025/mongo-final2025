const express = require("express");
const Event = require("../models/Event");
const router = express.Router();

// POST route to handle form submission
router.post("/events", async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;