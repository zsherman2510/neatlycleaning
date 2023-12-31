const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const { Customer, Properties, Jobs, CareDetail } = require("./models");
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

app.post("/cleaners/register", async (req, res) => {
  try {
    // Extract data from the request body
    const { property, job, firstName, lastName, email, phoneNumber, password } =
      req.body;

    console.log(property, job);
    console.log(property);
    console.log(password, "password");
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

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
    const jobRecord = await Jobs.create({
      ...job,
      customerId: customer.id,
      propertyId: propertyRecord.id,
      tasks: JSON.stringify(job.tasks),
    });

    // Create CareDetail records and associate them with the job
    for (const careDetailData of job.careDetails) {
      await CareDetail.create({
        ...careDetailData,
        jobId: jobRecord.id,
      });
    }

    // Respond with the created customer object
    res.status(201).json(customer);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} and connected to ${process.env.DB_DATABASE}`
  );
});

app.post("");
