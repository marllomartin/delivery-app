const { StatusCodes } = require('http-status-codes');
const ProductService = require('../services/ProductService');

const findAll = async (req, res) => {
  try {
    const result = await ProductService.findAll();
    return res.status(StatusCodes.OK).json(result);
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
};
const findById = async (req, res) => {
  try {
    const  { id } = req.params;
    const result = await ProductService.findById(id)
    return res.status(StatusCodes.OK).send(result);
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
}

module.exports = { findAll, findById };
