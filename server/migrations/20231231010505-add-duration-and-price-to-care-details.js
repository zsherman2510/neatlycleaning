"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Jobs", "duration", {
      type: Sequelize.INTEGER, // Adjust the data type as needed
      allowNull: false,
    });
    await queryInterface.addColumn("Jobs", "price", {
      type: Sequelize.FLOAT, // Adjust the data type as needed
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Jobs", "duration");
    await queryInterface.removeColumn("Jobs", "price");
  },
};
