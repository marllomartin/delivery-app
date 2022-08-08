const { product } = require('../database/models');

const findAll = async () => {
  const products = await product.findAll();

  return products;
};

module.exports = { findAll };
