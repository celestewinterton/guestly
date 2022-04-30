'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Venues', [{
      name: 'Wolfe Heights',
      address: "9440 Bar Du Lane",
      city: "Sacramento",
      state: "CA",
      zipcode: "95829",
    }], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Venues', null, {});
  }
};
