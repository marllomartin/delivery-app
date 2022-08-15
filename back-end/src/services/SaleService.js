const { sale, user, salesProduct } = require('../database/models');

const findAll = async () => {
  const sales = await sale.findAll();
  return sales;
};

const getById = async (id) => {
  const findSale = await sale.findByPk(
    id,
    {
      includes: [
        { model: user, as: 'user', attributes: { exclude: ['password'] } },
        { model: user, as: 'seller', attributes: { exclude: ['id', 'password', 'role'] } },
      ],
    },
  );
  return findSale;
};

const create = async (userId, data) => {
  const { sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = data;

  const newSale = await sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate: Date.now(),
    status: 'Pendente',
  });

  const newSalesProduct = await products.map((product) => ({
    saleId: newSale.id,
    productId: product.id,
    quantity: product.quantity,
  }));

  await salesProduct.bulkCreate(newSalesProduct);

  return newSale;
};

const update = async (data, id) => {
  await sale.update({ status: data.status }, { where: { id } });
  return { message: 'update successfully' };
};

module.exports = { findAll, getById, create, update };
