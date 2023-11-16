'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Assuming you have models named Job and Property
      Customer.hasMany(models.Job, { foreignKey: 'customerId' });
      Customer.hasMany(models.Property, { foreignKey: 'customerId' });
      // define association here
    }
  }
  Customer.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [10, 15] // Adjust length according to your requirements
      }
    },
    primaryAddress: {
      type: DataTypes.STRING,
      allowNull: true // Set to false if this is a required field
    },
    paymentInfo: {
      type: DataTypes.STRING,
      allowNull: true // Consider encrypting this data for security
    },
    profileImage: {
      type: DataTypes.STRING,
      allowNull: true // Store the URL/path to the image
    },
    preferences: {
      type: DataTypes.TEXT,
      allowNull: true // Store as JSON or serialized text
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
      // Remember to handle password hashing in your application logic
    }
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};
