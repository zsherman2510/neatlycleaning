// Import necessary modules
const { Model } = require("sequelize"); // Make sure to configure your database connection

// Define the Cleaner model

module.exports = (sequelize, DataTypes) => {
  class Cleaner extends Model {}

  Cleaner.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      // Work Experience
      yearsOfExperience: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      servicesOffered: {
        type: DataTypes.JSON, // You can use an array or JSON for multiple services
        allowNull: false,
      },

      // Location
      preferredServiceAreas: {
        type: DataTypes.STRING, // You can use an array or JSON for multiple areas
        allowNull: false,
      },

      // Profile Photo
      profilePhotoUrl: {
        type: DataTypes.STRING, // Store the URL of the uploaded photo
      },

      // Brief Bio
      bio: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Cleaner",
    }
  );
  return Cleaner;
};
