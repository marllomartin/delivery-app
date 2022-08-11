module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',
      [{
        id: 1,
        user_id: 1,
        seller_id: 2,
        total_price: 20.50,
        delivery_address: 'Rua Melancia',
        delivery_number: '20',
        sale_date: new Date('2022-08-01T19:58:00.000Z'),
        status: 'Pendente',
      },
      {
        id: 2,
        user_id: 2,
        seller_id: 1,
        total_price: 35.20,
        delivery_address: 'Avenida Laranja',
        delivery_number: '30',
        sale_date: new Date('2022-08-01T19:58:00.000Z'),
        status: 'Preparando',
      },
      {
        id: 3,
        user_id: 2,
        seller_id: 3,
        total_price: 60.99,
        delivery_address: 'Estrada Maracujá',
        delivery_number: '40',
        sale_date: new Date('2022-08-01T19:58:00.000Z'),
        status: 'Em Trânsito',
      },
      {
        id: 4,
        user_id: 3,
        seller_id: 1,
        total_price: 54.50,
        delivery_address: 'Rodovia Abacaxi',
        delivery_number: '50',
        sale_date: new Date('2022-08-01T19:58:00.000Z'),
        status: 'Entregue',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};
