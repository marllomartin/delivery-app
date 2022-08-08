const { StatusCodes } = require('http-status-codes');
const UserService = require('../services/UserService');

const login = async (req, res) => {
  try {
    const result = await UserService.login(req.body);
    return res.status(StatusCodes.OK).json(result);
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
};

const register = async (req, res) => {
  try {
    const result = await UserService.register(req.body);
    return res.status(StatusCodes.CREATED).json(result);
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
}

module.exports = { login, register };
