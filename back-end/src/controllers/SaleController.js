const { StatusCodes } = require('http-status-codes');
const SaleService = require('../services/SaleService');

const findAll = async (req, res) => {
  try {
    const result = await SaleService.findAll();
    return res.status(StatusCodes.OK).json(result);
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
};

const findAllByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await SaleService.findAllByUser(id);
    return res.status(StatusCodes.OK).json(result);
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
};

const findAllBySeller = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await SaleService.findAllBySeller(id);
    return res.status(StatusCodes.OK).json(result);
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const findSale = await SaleService.findById(id);
    return res.status(StatusCodes.OK).json(findSale);
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
};

const create = async (req, res) => {
  try {
    const data = req.body;
    const { userId } = req;
    const createdSale = await SaleService.create(userId, data);
    return res.status(StatusCodes.CREATED).json(createdSale);
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const result = await SaleService.update(status, id);
    return res.status(StatusCodes.CREATED).json(result);
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
};

module.exports = { findAll, findAllByUser, findAllBySeller, findById, create, update };
