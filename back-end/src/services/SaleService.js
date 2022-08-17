const { sale, user, salesProduct, product } = require('../database/models');

const findAll = async () => {
  const sales = await sale.findAll({
    include: [
      { model: user, as: 'user', attributes: { exclude: ['id', 'password', 'role'] } },
      { model: user, as: 'seller', attributes: { exclude: ['id', 'password', 'role'] } },
      { model: product, as: 'products' },
    ],
  });
  return sales;
};

const findAllByUser = async (id) => {
  const sales = await sale.findAll({
    where: { userId: id },
    include: [
      { model: user, as: 'user', attributes: { exclude: ['id', 'password', 'role'] } },
      { model: user, as: 'seller', attributes: { exclude: ['id', 'password', 'role'] } },
      { model: product, as: 'products' },
    ],
  });
  return sales;
};

const findAllBySeller = async (id) => {
  const sales = await sale.findAll({
    where: { sellerId: id },
    include: [
      { model: user, as: 'user', attributes: { exclude: ['id', 'password', 'role'] } },
      { model: user, as: 'seller', attributes: { exclude: ['id', 'password', 'role'] } },
      { model: product, as: 'products' },
    ],
  });
  return sales;
};

const findById = async (id) => {
  const findSale = await sale.findByPk(
    id,
    {
      include: [
        { model: user, as: 'user', attributes: { exclude: ['id', 'password', 'role'] } },
        { model: user, as: 'seller', attributes: { exclude: ['id', 'password', 'role'] } },
        { model: product, as: 'products' },
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

  const newSalesProduct = await products.map((x) => ({
    saleId: newSale.id,
    productId: x.id,
    quantity: x.quantity,
  }));

  await salesProduct.bulkCreate(newSalesProduct);

  return newSale;
};

const updateStatus = async (status, id) => {
  await sale.update({ status }, { where: { id } });
  return { message: `Sale ${id} status was updated to '${status}' ` };
};

module.exports = { findAll, findAllByUser, findAllBySeller, findById, create, updateStatus };
