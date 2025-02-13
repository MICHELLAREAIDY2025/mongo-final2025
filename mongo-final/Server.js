/*const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

//integrate Routes into Your Server: Update your server.js to use the routes
const eventRoutes = require("./routes/eventRoutes");
app.use("/api", eventRoutes);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define the schema
const registrationSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    event: String,
    numberOfPersons: Number,
    message: String
});

const Registration = mongoose.model('Registration', registrationSchema);

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Change as per your email service
    auth: {
        user: process.env.EMAIL, // Your email
        pass: process.env.EMAIL_PASSWORD // Your email password
    }
});

// Route for form submission
app.post('/register', async (req, res) => {
    const registrationData = new Registration(req.body);

    try {
        await registrationData.save();

        // Send email
        const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.OWNER_EMAIL, // Owner's email
            subject: 'New Event Registration',
            text: `New registration from ${req.body.name}\n\nDetails:\n${JSON.stringify(req.body, null, 2)}`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).send('Registration successful and email sent!');
    } catch (error) {
        res.status(500).send('Error saving registration data or sending email');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${3000}`);
});*/

/*const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());  // Allows JSON data parsing
app.use(cors());  // Enables CORS for frontend communication

let events = [];  // Temporary array to store events

// ✅ POST: Create an Event
app.post("/api/events", (req, res) => {
  if (!req.body.name || !req.body.date || !req.body.location) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const event = req.body;
  events.push(event);
  res.status(201).json({ message: "Event created successfully", event });
});

// ✅ GET: Retrieve Events
app.get("/api/events", (req, res) => {
  res.json(events);
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));





/*import express from "express";
import cors from "cors";

const cors = require("cors");
app.use(cors());

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(cors()); // Enables CORS for frontend communication

// ✅ POST: Contact Form Submission
app.post("/api/contact", (req, res) => {
    const { name, email, phone, event, persons, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !event) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    console.log("New Registration:", req.body);
    res.status(201).json({ message: "Registration submitted successfully", data: req.body });
});

// ✅ Start the Server
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});*/






  
