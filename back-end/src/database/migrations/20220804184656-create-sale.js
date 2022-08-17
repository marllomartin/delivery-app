'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      sellerId: {
        type: Sequelize.INTEGER,
        field: 'seller_id',
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9, 2),
        field: 'total_price',
      },
      deliveryAddress: {
        type: Sequelize.STRING,
        field: 'delivery_address'
      },
      deliveryNumber: {
        type: Sequelize.STRING,
        field: 'delivery_number'
      },
      saleDate: {
        allowNull: false,
        field: 'sale_date',
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }
};
