const { sale, user } = require('../database/models');

const findAll = async () => {
  const sales = await sale.findAll();
  return sales;
};

const getById = async (id) => {
  const findOrder = await sale.findByPk(
    id,
    {
      includes: [
        { model: user, as: 'user', attributes: { exclude: ['password'] } },
        { model: user, as: 'seller', attributes: { exclude: ['id', 'password', 'role'] } },
      ],
    },
  );
  return findOrder;
};

module.exports = { findAll, getById };