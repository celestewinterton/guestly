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
        image: "https://user-images.githubusercontent.com/96894806/167024480-122809cf-3015-4af2-b239-9150359e132c.jpeg",
        userId: 5
      }, {
        name: "Steph's Wedding!",
        date: "2023-04-23",
        details: "Save the Date!",
        dresscode: "Semi-Formal",
        numberOfTables: 12,
        image: "https://user-images.githubusercontent.com/96894806/167024538-4873ed66-72d9-4b4b-b80a-a7f136547689.jpeg",
        userId: 7
      }, {
        name: "Demo Wedding",
        date: "2023-04-30",
        details: "More details to come...",
        dresscode: "Cocktail-Formal",
        numberOfTables: 10,
        image: "https://user-images.githubusercontent.com/96894806/167018667-334b5921-8fc7-421d-a98b-79385c897277.jpeg",
        userId: 1
      }, {
        name: "Katie and John",
        date: "2023-09-30",
        details: "More details to come!!!",
        dresscode: "Cocktail-Formal",
        numberOfTables: 8,
        image: "https://user-images.githubusercontent.com/96894806/167024522-8d30889e-dacf-4aec-947c-785d938c12de.jpeg",
        userId: 1
      }, {
        name: "Kelly & Adam",
        date: "2024-02-30",
        details: "TBD",
        dresscode: "Semi-Formal",
        numberOfTables: 12,
        image: "https://user-images.githubusercontent.com/96894806/167024548-364a0cf2-e6c1-42a7-8a02-192a318490ed.jpeg",
        userId: 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Events', null, {});
  }
};
