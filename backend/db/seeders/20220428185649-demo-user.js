'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
    {
      fullname: 'Demo User',
      email: 'demo@user.io',
      username: 'demouser',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      fullname: 'Hannah Malone',
      email: 'hannah@gmail.com',
      username: 'hannah',
      hashedPassword: bcrypt.hashSync('calithegoat')
    },
    {
      fullname: 'Haider Karim',
      email: 'haider@gmail.com',
      username: 'haider',
      hashedPassword: bcrypt.hashSync('haider')
    },
    {
      fullname: 'Celeste Winterton',
      email: 'celestewinterton@gmail.com',
      username: 'cal',
      hashedPassword: bcrypt.hashSync('liddell')
    },
    {
      fullname: 'Lauren Okamoto',
      email: 'lauren@gmail.com',
      username: 'lauren',
      hashedPassword: bcrypt.hashSync('waffle')
    },
    {
      fullname: 'Alaina Fong',
      email: 'alaina@gmail.com',
      username: 'alaina',
      hashedPassword: bcrypt.hashSync('disney')
    },
    {
      fullname: 'Steph Shijo',
      email: 'steph@gmail.com',
      username: 'steph',
      hashedPassword: bcrypt.hashSync('bakery')
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
