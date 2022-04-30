'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Registries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item: {
        type: Sequelize.STRING(100)
      },
      details: {
        type: Sequelize.STRING(255)
      },
      link: {
        type: Sequelize.STRING(255)
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {model: "Users"}
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
    return queryInterface.dropTable('Registries');
  }
};
