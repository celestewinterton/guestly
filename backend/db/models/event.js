'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    details: DataTypes.STRING,
    dresscode: DataTypes.STRING,
    image: DataTypes.STRING,
    numberOfTables: DataTypes.INTEGER,
    venueId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    Event.belongsTo(models.Venue, {foreignKey: "venueId"})
    Event.belongsTo(models.User, {foreignKey: "userId"})
    Event.hasMany(models.Table, {foreignKey: "eventId"})
    Event.hasMany(models.RSVP, {foreignKey: "eventId"})
  };
  return Event;
};
