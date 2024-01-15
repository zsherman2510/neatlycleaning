"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Jobs extends Model {
    static associate(models) {
      // Assuming you have Customer and Property models
      Jobs.belongsTo(models.Customer, { foreignKey: "customerId" });
      Jobs.belongsTo(models.Properties, { foreignKey: "propertyId" });
      Jobs.belongsTo(models.Cleaner, { foreignKey: "cleanerId" });
    }
  }
  Jobs.init(
    {
      customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Customers", // This references the Customers table
          key: "id",
        },
      },
      propertyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Properties", // This references the Properties table
          key: "id",
        },
      },
      cleanerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Cleaners",
          key: "id",
        },
      },
      typeOfCare: DataTypes.STRING,
      address: DataTypes.STRING,
      jobStatus: DataTypes.STRING,
      specialRequests: DataTypes.TEXT,
      tasks: { type: DataTypes.JSON, allowNull: false },
      frequency: { type: DataTypes.STRING, allowNull: false },
      duration: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.FLOAT, allowNull: true },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Jobs",
      // If you want to explicitly set the table name, uncomment the next line
      // tableName: 'Jobs'
    }
  );

  return Jobs;
};
