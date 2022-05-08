'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Venues', [
    {
      name: 'Private Location',
    }, {
      name: 'Wolfe Heights',
      address: "9440 Bar Du Lane",
      city: "Sacramento",
      state: "CA",
      zipcode: "95829",
    }, {
      name: 'Cuvier Club',
      address: "7776 Eads Avenue",
      city: "La Jolla",
      state: "CA",
      zipcode: "92037",
      link: "https://www.cuvierclub.net/",
    }, {
      name: 'Shutters on the Beach',
      address: "1 Pico Boulevard",
      city: "Santa Monica",
      state: "CA",
      zipcode: "90405",
      link: "https://www.shuttersonthebeach.com/",
    }, {
      name: 'Surf and Sand Resort',
      address: "1555 South Coast Highway",
      city: "Laguna Beach",
      state: "CA",
      zipcode: "92651",
      link: "https://www.surfandsandresort.com/"
    }, {
      name: 'Malibu West Beach Club',
      address: "30756 Pacific Coast Highway",
      city: "Malibu",
      state: "CA",
      zipcode: "90265",
      link: "https://www.malibuwestbeachclub.com/"
    }, {
      name: 'River Terrace Inn',
      address: "1600 Soscol Avenue",
      city: "Napa",
      state: "CA",
      zipcode: "94559",
      link: "https://www.riverterraceinn.com/"
    }, {
      name: 'Saddlerock Ranch',
      address: "Malibu",
      city: "Malibu",
      state: "CA",
      zipcode: "90265",
      link: "https://www.saddlerock-ranch.com/"
    }, {
      name: 'The Farmhouse',
      address: "27135 Old Highway 105 W",
      city: "Montgomery",
      state: "TX",
      zipcode: "77316",
      link: "https://thefarmhouseevents.com/"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Venues', null, {});
  }
};
