module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Products',
      [{
        id: 1,
        name: 'Água mineral',
        price: 10,
        url_image: 'agua.jpg'
      },
      {
        id: 2,
        name: 'Refrigerante',
        price: 15,
        url_image: 'pepsi.png'
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
