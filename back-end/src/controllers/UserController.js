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

// const findSellerByEmail = async (req, res) => {
//   try {
//     const { email } = req.params;
//     const result = await UserService.findSellerByEmail(email);
//     return res.status(StatusCodes.OK).json(result);
//   } catch (Error) {
//     return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
//   }
// };

const register = async (req, res) => {
  try {
    const result = await UserService.register(req.body);
    return res.status(StatusCodes.CREATED).json(result);
  } catch (Error) {
    return res.status(StatusCodes.CONFLICT).send({ message: Error.message });
  }
};

const findAllSellers = async (req, res) => {
  try {
    const result = await UserService.findAllSellers();
    return res.status(StatusCodes.OK).json(result);
  } catch (Error) {
    return res.status(StatusCodes.NOT_FOUND).send({ message: Error.message });
  }
};

module.exports = { login, register, findAllSellers };
