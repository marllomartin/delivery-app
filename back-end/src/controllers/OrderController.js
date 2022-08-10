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

module.exports = { findAll };
