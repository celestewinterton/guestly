'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      guestsPerTable: {
        type: Sequelize.INTEGER
      },
      tableShape: {
        type: Sequelize.STRING(50)
      },
      placement: {
        type: Sequelize.STRING(50)
      },
      eventId: {
        type: Sequelize.INTEGER,
        references: {model: "Events"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tables');
  }
};
