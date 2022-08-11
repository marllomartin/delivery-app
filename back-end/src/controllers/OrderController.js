const { StatusCodes } = require('http-status-codes');
const OrderService = require('../services/OrderService');

const findAll = async (req, res) => {
    try {
      const result = await OrderService.findAll();
      return res.status(StatusCodes.OK).json(result);
    } catch (Error) {
      return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
    }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const findOrder = await OrderService.getById(id);
    return res.status(StatusCodes.OK).json(findOrder);
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
};

const create = async (req, res) => {
try {
  const createdOrder = await OrderService.create(req.body);
  return res.status(StatusCodes.CREATED).json({ createdOrder });
} catch (Error) {
  return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
};

module.exports = { findAll, findById, create };
