"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Properties extends Model {
    static associate(models) {
      // Assuming you have a Customer and Job model
      Properties.belongsTo(models.Customer, { foreignKey: "customerId" });
      Properties.hasMany(models.Jobs, { foreignKey: "propertyId" });
    }
  }
  Properties.init(
    {
      customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Customers", // This references the Customers table
          key: "id",
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      propertyType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bedrooms: DataTypes.INTEGER,
      bathrooms: DataTypes.INTEGER,
      suppliesRequired: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      equipmentRequired: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isPrimary: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Properties",
      // If you want to explicitly set the table name, uncomment the next line
      // tableName: 'Properties'
    }
  );

  return Properties;
};
