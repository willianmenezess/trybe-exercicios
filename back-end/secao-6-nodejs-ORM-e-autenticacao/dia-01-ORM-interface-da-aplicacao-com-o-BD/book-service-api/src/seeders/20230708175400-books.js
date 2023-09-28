'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkInsert('Books', [
      {
        title: 'The Lord of the Rings',
        author: 'J. R. R. Tolkien',
        page_quantity: 1178,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Dexter: Darkly Dreaming',
        author: 'Jeff Lindsay',
        page_quantity: 288,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkDelete('Books', null, {});
  }
};
