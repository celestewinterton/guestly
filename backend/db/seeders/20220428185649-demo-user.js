'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
    {
      firstName: 'Demo',
      lastName: 'User',
      email: 'demo@user.io',
      username: 'demouser',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      firstName: 'Hannah',
      lastName: 'Malone',
      email: 'hannah@gmail.com',
      username: 'hannah',
      hashedPassword: bcrypt.hashSync('calithegoat')
    },
    {
      firstName: 'Haider',
      lastName: 'Karim',
      email: 'haider@gmail.com',
      username: 'haider',
      hashedPassword: bcrypt.hashSync('haider')
    },
    {
      firstName: 'Celeste',
      lastName: 'Winterton',
      email: 'celestewinterton@gmail.com',
      username: 'cal',
      hashedPassword: bcrypt.hashSync('liddell')
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
  //  return queryInterface.bulkDelete('Users', null, {});
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['demouser', 'hannah', 'haider', 'cal'] }
    }, {})
  }
};
