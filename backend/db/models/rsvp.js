'use strict';
module.exports = (sequelize, DataTypes) => {
  const RSVP = sequelize.define('RSVP', {
    selfDietary: DataTypes.STRING,
    plusOne: DataTypes.BOOLEAN,
    plusOneDietary: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {});
  RSVP.associate = function(models) {
    // associations can be defined here
    RSVP.belongsTo(models.User, {foreignKey: "userId"})
    RSVP.belongsTo(models.Event, {foreignKey: "eventId"})
    RSVP.hasMany(models.Seat, {foreignKey: "rsvpId"})
  };
  return RSVP;
};
