const { sale } = require('../database/models');

const findAll = async () => {
  const sales = await sale.findAll();
  return sales;
};

module.exports = { findAll };