'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tables', [
      {
        guestsPerTable: 10,
        tableShape: "Round",
        eventId: 1,
        userId: 1
      }, {
        guestsPerTable: 10,
        tableShape: "Round",
        eventId: 1,
        userId: 2
      }, {
        guestsPerTable: 10,
        tableShape: "Round",
        eventId: 1,
        userId: 3
      }, {
        guestsPerTable: 10,
        tableShape: "Round",
        eventId: 1,
        userId: 4
      }, {
        guestsPerTable: 10,
        tableShape: "Round",
        eventId: 1,
        userId: 5
      }, {
        guestsPerTable: 10,
        tableShape: "Round",
        eventId: 1,
        userId: 6
      }, {
        guestsPerTable: 10,
        tableShape: "Round",
        eventId: 1,
        userId: 7
      }, {
        guestsPerTable: 8,
        tableShape: "Round",
        eventId: 4,
        userId: 1
      }, {
        guestsPerTable: 8,
        tableShape: "Round",
        eventId: 1,
        userId: 2
      }, {
        guestsPerTable: 8,
        tableShape: "Round",
        eventId: 4,
        userId: 3
      }, {
        guestsPerTable: 8,
        tableShape: "Round",
        eventId: 4,
        userId: 4
      }, {
        guestsPerTable: 8,
        tableShape: "Round",
        eventId: 4,
        userId: 5
      }, {
        guestsPerTable: 8,
        tableShape: "Round",
        eventId: 4,
        userId: 6
      }, {
        guestsPerTable: 8,
        tableShape: "Round",
        eventId: 4,
        userId: 7
      },
    ], {});
    },

    down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tables', null, {});
    }
};
