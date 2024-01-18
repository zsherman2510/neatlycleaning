"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("jobs", "cleanerId", {
      type: Sequelize.INTEGER,
      references: {
        model: "cleaners", // Assuming 'cleaners' table
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("jobs", "cleanerId");
  },
};
