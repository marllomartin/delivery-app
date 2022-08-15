const { StatusCodes } = require('http-status-codes');

const validateUpdateSale = (req, res, next) => {
  const { status } = req.body;

  if (
    status === 'Preparando'
    || status === 'Em Trânsito'
    || status === 'Entregue'
  ) {
    return next();
  }

  return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: 'Incorrect Status' });
};

module.exports = validateUpdateSale;
