'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('RSVPs', [
    {
      selfDietary: "None",
      plusOneDietary: "None",
      userId: 1,
      eventId: 1,
    }, {
      plusOne: "Haider Karim",
      selfDietary: "None",
      plusOneDietary: "None",
      userId: 2,
      eventId: 1,
    }, {
      plusOne: "Alex Clatterbuck",
      selfDietary: "None",
      plusOneDietary: "None",
      userId: 4,
      eventId: 1,
    }, {
      plusOne: "Alex Clatterbuck",
      selfDietary: "None",
      plusOneDietary: "None",
      userId: 4,
      eventId: 2,
    }, {
      plusOne: "Haider Karim",
      selfDietary: "None",
      plusOneDietary: "None",
      userId: 2,
      eventId: 2,
    }, {
      plusOne: "Haider Karim",
      selfDietary: "None",
      plusOneDietary: "None",
      userId: 2,
      eventId: 3,
    }, {
      plusOne: "Haider Karim",
      selfDietary: "None",
      plusOneDietary: "None",
      userId: 2,
      eventId: 4,
    }, {
      plusOne: "Haider Karim",
      selfDietary: "None",
      plusOneDietary: "None",
      userId: 2,
      eventId: 5,
    }, {
      selfDietary: "None",
      plusOneDietary: "None",
      userId: 3,
      eventId: 4,
    }, {
      selfDietary: "None",
      plusOneDietary: "None",
      userId: 4,
      eventId: 4,
    }, {
      plusOne: "Joel Ginsberg",
      selfDietary: "None",
      plusOneDietary: "None",
      userId: 5,
      eventId: 4,
    }, {
      selfDietary: "None",
      plusOneDietary: "None",
      userId: 6,
      eventId: 4,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('RSVPs', null, {});
  }
};
