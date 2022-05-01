'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      {
        name: "H&H's Wedding",
        date: "2022-08-28",
        details: "",
        dresscode: "Bridesmaids and groomsmen will be wearing teal and grey. Feel free to coordinate or feel free to stand out!",
        numberOfTables: 20,
        userId: 2,
        venueId: 1
      }, {
        name: "Lauren and Joel",
        date: "2022-06-30",
        details: "",
        dresscode: "",
        numberOfTables: 4,
        userId: 5
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Events', null, {});
  }
};
