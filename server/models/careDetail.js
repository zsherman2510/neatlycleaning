'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CareDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Assuming you have a Job model
      CareDetail.belongsTo(models.Job, { foreignKey: 'jobId' });
    }
  }
  CareDetail.init({
    jobId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Jobs',
        key: 'id'
      }
    },
    frequency: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER, // duration in hours
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'CareDetail',
  });
  return CareDetail;
};
