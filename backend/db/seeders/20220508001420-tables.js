'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tables', [
      {
        guestsPerTable: 10,
        tableShape: "Round",
        eventId: 1,
      }, {
        guestsPerTable: 10,
        tableShape: "Round",
        eventId: 1,
      }, {
        guestsPerTable: 10,
        tableShape: "Round",
        eventId: 1,
      }, {
        guestsPerTable: 10,
        tableShape: "Round",
        eventId: 1,
      }, {
        guestsPerTable: 10,
        tableShape: "Round",
        eventId: 1,
      }, {
        guestsPerTable: 10,
        tableShape: "Round",
        eventId: 1,
      }, {
        guestsPerTable: 10,
        tableShape: "Round",
        eventId: 1,
      }, {
        guestsPerTable: 8,
        tableShape: "Round",
        eventId: 4,
      }, {
        guestsPerTable: 8,
        tableShape: "Round",
        eventId: 1,
      }, {
        guestsPerTable: 8,
        tableShape: "Round",
        eventId: 4,
      }, {
        guestsPerTable: 8,
        tableShape: "Round",
        eventId: 4,
      }, {
        guestsPerTable: 8,
        tableShape: "Round",
        eventId: 4,
      }, {
        guestsPerTable: 8,
        tableShape: "Round",
        eventId: 4,
      }, {
        guestsPerTable: 8,
        tableShape: "Round",
        eventId: 4,
      },
    ], {});
    },

    down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tables', null, {});
    }
};
