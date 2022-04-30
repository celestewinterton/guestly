'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RSVPs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      selfDietary: {
        type: Sequelize.STRING(50)
      },
      plusOne: {
        type: Sequelize.BOOLEAN
      },
      plusOneDietary: {
        type: Sequelize.STRING(50)
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {model: "Users"}
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
    return queryInterface.dropTable('RSVPs');
  }
};
