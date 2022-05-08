'use strict';
module.exports = (sequelize, DataTypes) => {
  const Seat = sequelize.define('Seat', {
    selection: DataTypes.STRING,
    tableId: DataTypes.INTEGER,
    rsvpId: DataTypes.INTEGER
  }, {});
  Seat.associate = function(models) {
    // associations can be defined here
    Seat.belongsTo(models.Table, {foreignKey: "tableId", onDelete: 'CASCADE'})
    Seat.belongsTo(models.RSVP, {foreignKey: "rsvpId", onDelete: 'CASCADE'})
  };
  return Seat;
};
