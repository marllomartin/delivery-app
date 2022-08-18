const { StatusCodes } = require('http-status-codes');

const validateCustomerStatus = (status) => {
  if (status === 'Entregue') return true;
  return false;
};

const validateSellerStatus = (status) => {
  if (status === 'Preparando' || status === 'Em Trânsito') return true;
  return false;
};

const validateStatus = (req, res, next) => {
  const { status } = req.body;
  const { userRole } = req;

  switch (userRole) {
    case 'customer':
      if (validateCustomerStatus(status)) return next();
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: 'Incorrect Status' });
    case 'seller':
      if (validateSellerStatus(status)) return next();
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: 'Incorrect Status' });
    default:
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Incorrect Role' });
  }
};

module.exports = validateStatus;
