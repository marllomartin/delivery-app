const { product } = require('../database/models');

const findAll = async () => {
  const products = await product.findAll();

  return products;
};

const findById = async (id) => {
  const productById = await product.findByPk(id);
  if (!productById) return null;
  return productById;
};

module.exports = { findAll, findById };
