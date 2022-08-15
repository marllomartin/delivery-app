'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', {
      saleId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'sale_id'
      },
      productId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'product_id'
      },
      quantity: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales_products');
  }
};
