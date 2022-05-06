'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      {
        name: "H&H's Wedding",
        date: "2023-08-27",
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
        image: "https://user-images.githubusercontent.com/96894806/167048731-55f4334e-1959-4f66-9f83-f60e64d2c109.jpeg",
        userId: 1
      }, {
        name: "Katie and John",
        date: "2023-09-30",
        details: "More details to come!!!",
        dresscode: "Cocktail-Formal",
        numberOfTables: 8,
        image: "https://user-images.githubusercontent.com/96894806/167024522-8d30889e-dacf-4aec-947c-785d938c12de.jpeg",
        userId: 4
      }, {
        name: "Kelly & Adam",
        date: "2024-02-05",
        details: "TBD",
        dresscode: "Semi-Formal",
        numberOfTables: 12,
        image: "https://user-images.githubusercontent.com/96894806/167024548-364a0cf2-e6c1-42a7-8a02-192a318490ed.jpeg",
        userId: 4
      }, {
        name: "Tyler & Amy",
        date: "2022-11-05",
        details: "TBD",
        dresscode: "Formal",
        numberOfTables: 15,
        image: "https://user-images.githubusercontent.com/96894806/167048755-bc63428a-7229-4d62-b5b6-9812d2ea1539.jpeg",
        userId: 4
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Events', null, {});
  }
};
