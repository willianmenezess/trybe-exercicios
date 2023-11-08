'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Books', 'publisher', {
      type: Sequelize.STRING,
      allowNull: true,
      after: 'page_quantity',
    });
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.removeColumn('Books', 'publisher');
  }
};
