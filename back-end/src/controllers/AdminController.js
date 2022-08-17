const { StatusCodes } = require('http-status-codes');
const AdminService = require('../services/AdminService');

const registerAdmin = async (req, res) => {
  try {
    const result = await AdminService.registerAdmin(req.body);
    return res.status(StatusCodes.CREATED).json(result);
  } catch (Error) {
    return res.status(StatusCodes.CONFLICT).send({ message: Error.message });
  }
};

const findAllUsers = async (req, res) => {
  try {
    const result = await AdminService.findAllUsers();
    return res.status(StatusCodes.OK).json(result);
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await AdminService.deleteUser(id);
    return res.status(StatusCodes.OK).json(result);
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
};

module.exports = { registerAdmin, findAllUsers, deleteUser };
