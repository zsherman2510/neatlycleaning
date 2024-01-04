const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Sequelize } = require("sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const fs = require("fs");
const { Customer, Properties, Jobs, CareDetail } = require("./models");
require("dotenv").config();

const app = express();

// const privateKey = fs.readFileSync("server/private-key.pem", "utf8");
const publicKey = fs.readFileSync("server/public-key.pem", "utf8");

// console.log(privateKey, "privateKey");

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
    console.log(job.frequency, "job frequency");
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
      frequency: job.frequency,
      customerId: customer.id,
      propertyId: propertyRecord.id,
      tasks: JSON.stringify(job.tasks),
    });

    const response = {
      customer,
      propertyRecord,
      jobRecord,
    };

    // Respond with the created customer object
    res.status(201).json(response);
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
    const user = await Customer.findOne({ where: { email } });
    console.log(user.id, "user");

    // If the user doesn't exist, respond with an error
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare the provided password with the hashed password from the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If the passwords don't match, respond with an error
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // If authentication is successful, generate a JWT
    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
      expiresIn: "1h", // You can adjust the expiration time
    });

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        // Token is invalid or has expired
        console.error("Token verification failed:", err);
        res.status(401).json({ error: "Token is invalid or has expired" });
      } else {
        // Token is valid, and `decoded` contains the payload
        console.log("Token is valid. Decoded payload:", decoded, token);

        // You can now access the payload properties like `userId`
        const userId = decoded.userId;

        // Proceed with your authentication logic or other operations
        // For example, you can fetch user data based on `userId` and perform actions accordingly
        // ...

        // Optionally, you can send a success response
        res.json({ token, message: "Token is valid", userId });
      }
    });
  } catch (error) {
    console.error("Error during login:", error);
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
