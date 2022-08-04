module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        id: 1,
        name: 'Marllon Martins',
        email: 'marllon@gmail.com',
        password: '123456',
        role: 'admin'
      },
      {
        id: 2,
        name: 'Giovanna Eliz',
        email: 'giovanna@gmail.com',
        password: '123456',
        role: 'admin'
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
