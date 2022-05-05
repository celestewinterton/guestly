'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      {
        name: "H&H's Wedding",
        date: "2022-08-27",
        details: "Save the Date!",
        dresscode: "Teal and Grey",
        numberOfTables: 20,
        image: 'https://user-images.githubusercontent.com/96894806/166847552-672c7a3d-ebc6-4b03-8682-951981c0b65c.jpeg',
        userId: 2,
        venueId: 1
      }, {
        name: "Lauren and Joel",
        date: "2022-06-30",
        details: "Details to come!",
        dresscode: "Dressy-Casual",
        numberOfTables: 4,
        userId: 5
      }
      , {
        name: "Steph's Wedding!",
        date: "2023-04-23",
        details: "Save the Date!",
        dresscode: "Semi-Formal",
        numberOfTables: 12,
        userId: 7
      }, {
        name: "Demo Wedding",
        date: "2023-04-30",
        details: "More details to come...",
        dresscode: "Cocktail-Formal",
        numberOfTables: 10,
        userId: 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Events', null, {});
  }
};
