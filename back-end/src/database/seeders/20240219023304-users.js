'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        fullName: 'Alan Turing',
        email: 'alan@test.com',
        phoneNumber: '1187654321',
        cellPhoneNumber: '11912345678',
      },
      {
        fullName: 'Albert Einstein',
        email: 'albert@test.com',
        phoneNumber: '1187654321',
        cellPhoneNumber: '11912345678',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};