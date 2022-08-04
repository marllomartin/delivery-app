module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('salesProducts',
      [{
        sale_id: 1,
        product_id: 1,
        quantity: 2,
      },
      {
        sale_id: 2,
        product_id: 2,
        quantity: 3,
      }
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('salesProducts', null, {});
  },
};
