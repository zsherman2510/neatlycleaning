'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Home extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Home.belongsTo(models.Customer, { foreignKey: 'customerId' });
      Home.hasMany(models.Task, { foreignKey: 'homeId' });
    }
  }
  Home.init({
    customerId: DataTypes.INTEGER,
    street: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    bedrooms: DataTypes.INTEGER,
    bathrooms: DataTypes.INTEGER,
    supplies: DataTypes.BOOLEAN,
    equipment: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Home',
  });
  return Home;
};