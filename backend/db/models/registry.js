'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registry = sequelize.define('Registry', {
    item: DataTypes.STRING,
    details: DataTypes.STRING,
    link: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Registry.associate = function(models) {
    // associations can be defined here
    Registry.belongsTo(models.User, {foreignKey: "userId" , onDelete: 'CASCADE'})
  };
  return Registry;
};
