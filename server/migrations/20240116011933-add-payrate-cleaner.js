"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Cleaners", "payRate", {
      type: Sequelize.STRING, // Adjust the data type as needed
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Cleaners", "payRate");
  },
};
