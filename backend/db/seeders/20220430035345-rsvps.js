'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('RSVPs', [
    {
      selfDietary: "none",
      plusOneDietary: "none",
      userId: 1,
      eventId: 1,
    }, {
      plusOne: "Haider Karim",
      selfDietary: "none",
      plusOneDietary: "none",
      userId: 2,
      eventId: 1,
    }, {
      plusOne: "Hannah Malone",
      selfDietary: "none",
      plusOneDietary: "none",
      userId: 3,
      eventId: 1,
    }, {
      plusOne: "Alex Clatterbuck",
      selfDietary: "none",
      plusOneDietary: "none",
      userId: 4,
      eventId: 1,
    }, {
      plusOne: "Alex Clatterbuck",
      selfDietary: "none",
      plusOneDietary: "none",
      userId: 4,
      eventId: 2,
    }, {
      selfDietary: "none",
      plusOneDietary: "none",
      userId: 6,
      eventId: 2,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('RSVPs', null, {});
  }
};
