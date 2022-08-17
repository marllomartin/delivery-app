const { StatusCodes } = require('http-status-codes');

const authAdmin = async (req, res, next) => {
  const { userRole } = req;

  if (userRole !== 'administrator') {
    return res.status(StatusCodes.FORBIDDEN).json({ message: 'You are not an admin' });
  }

  next();
};

module.exports = authAdmin;
