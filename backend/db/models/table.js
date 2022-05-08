'use strict';
module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('Table', {
    guestsPerTable: DataTypes.INTEGER,
    tableShape: DataTypes.STRING,
    placement: DataTypes.STRING,
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Table.associate = function(models) {
    // associations can be defined here
    Table.belongsTo(models.Event, {foreignKey: "eventId", onDelete: 'CASCADE'} )
    Table.hasMany(models.Seat, {foreignKey: "tableId"})
  };
  return Table;
};
