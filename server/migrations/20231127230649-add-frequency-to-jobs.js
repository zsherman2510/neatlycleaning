'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Jobs', 'frequency', {
      type: Sequelize.STRING,
      allowNull: false // or false, based on your requirement
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Jobs', 'frequency');
  }
};
