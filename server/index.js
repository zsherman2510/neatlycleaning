const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Sequelize } = require("sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const multer = require("multer");
const fs = require("fs");
const { Customer, Properties, Jobs, Cleaner } = require("./models");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

console.log("DB Dialect:", process.env.DB_DIALECT);
// Initialize Sequelize with the configuration from config.json
const sequelize = new Sequelize({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// Sample route for testing
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the cleaning app's server!" });
});

app.post("/cleaner/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const cleaner = await Cleaner.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      phoneNumber: req.body.phone,
      yearsOfExperience: req.body.cleaningExperience,
      servicesOffered: req.body.cleaningServices,
      preferredServiceAreas: req.body.preferredServiceArea,
      profilePhotoUrl: req.body.profilePhotoUrl,
      payRate: req.body.payRate,
    });

    // Respond with the created customer object
    res.status(201).json(cleaner.id);
  } catch (e) {}
});

app.post("/customer/register", async (req, res) => {
  try {
    // Extract data from the request body
    const { property, job, firstName, lastName, email, phoneNumber, password } =
      req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new Customer record in the database
    const customer = await Customer.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      address: property.address,
      password: hashedPassword,
    });

    // Create a new Property record and associate it with the customer
    const propertyRecord = await Properties.create({
      ...property,
      customerId: customer.id,
    });

    // Create a new Job record and associate it with the customer and property
    await Jobs.create({
      ...job,
      frequency: job.frequency,
      customerId: customer.id,
      propertyId: propertyRecord.id,
      tasks: JSON.stringify(job.tasks),
    });

    // Respond with the created customer object
    res.status(201).json(customer.id);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    // Extract email and password from the request body
    const { email, password } = req.body;

    // Query the database to find a user with the provided email
    const customer = await Customer.findOne({ where: { email } });
    const cleaner = await Cleaner.findOne({ where: { email } });

    // If the user doesn't exist, respond with an error
    if (!customer && !cleaner) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const userType = customer ? "customer" : "cleaner";
    let user = customer || cleaner;

    // Compare the provided password with the hashed password from the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If the passwords don't match, respond with an error
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate a JWT
    const token = jwt.sign(
      { userId: user.id, userType },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h", // You can adjust the expiration time
      }
    );

    // Set the JWT as an HTTP-only cookie
    res.cookie("jwt", token, { httpOnly: true, secure: true, maxAge: 3600000 }); // Max age in milliseconds (1 hour)

    // Remove the password field from the user object
    delete user.dataValues.password;

    const { dataValues: returnedUser } = user;

    console.log(returnedUser, "returneduser");

    res.json({ token, message: "Token is valid", returnedUser, userType });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/getCaregivers", async (req, res) => {
  try {
    const cleaners = await Cleaner.findAll(); // Retrieve all cleaners from the database
    res.status(200).json(cleaners); // Respond with the cleaners in JSON format
  } catch (error) {
    console.error("Error fetching cleaners:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/getJobs", async (req, res) => {
  try {
    const jobs = await Jobs.findAll(); // Retrieve all cleaners from the database
    res.status(200).json(jobs); // Respond with the cleaners in JSON format
  } catch (error) {
    console.error("Error fetching cleaners:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} and connected to ${process.env.DB_DATABASE}`
  );
});

app.post("");
