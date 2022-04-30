'use strict';
module.exports = (sequelize, DataTypes) => {
  const Seat = sequelize.define('Seat', {
    tableId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Seat.associate = function(models) {
    // associations can be defined here
    Seat.belongsTo(models.Table, {foreignKey: "tableId", onDelete: 'CASCADE'})
    Seat.belongsTo(models.RSVP, {foreignKey: "rsvpId", onDelete: 'CASCADE'})
  };
  return Seat;
};
