const { StatusCodes } = require('http-status-codes');
const UserService = require('../services/UserService');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await UserService.login(email, password);
    return res.status(StatusCodes.OK).json(result);
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
};

module.exports = { login };
