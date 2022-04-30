'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('RSVPs', [
    {
      plusOne: false,
      selfDietary: "no restrictions",
      plusOneDietary: "no restrictions",
      userId: 1,
      eventId: 1,
    }, {
      plusOne: false,
      selfDietary: "no restrictions",
      plusOneDietary: "no restrictions",
      userId: 2,
      eventId: 1,
    }, {
      plusOne: false,
      selfDietary: "no restrictions",
      plusOneDietary: "no restrictions",
      userId: 3,
      eventId: 1,
    }, {
      plusOne: true,
      selfDietary: "no restrictions",
      plusOneDietary: "no restrictions",
      userId: 4,
      eventId: 1,
    }, {
      plusOne: true,
      selfDietary: "no restrictions",
      plusOneDietary: "no restrictions",
      userId: 4,
      eventId: 2,
    }, {
      plusOne: false,
      selfDietary: "no restrictions",
      plusOneDietary: "no restrictions",
      userId: 6,
      eventId: 2,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('RSVPs', null, {});
  }
};
