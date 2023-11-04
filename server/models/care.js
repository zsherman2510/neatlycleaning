'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Care extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Care.belongsTo(models.Customer, { foreignKey: 'customerId' });
    }
  }
  Care.init({
    customerId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    frequency: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Care',
  });
  return Care;
};