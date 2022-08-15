const { StatusCodes } = require('http-status-codes');

const validateUpdateSale = (req, res, next) => {
  const { status } = req.body;

  if (error) return res.status(StatusCodes.NOT_FOUND).json({ message: error.message });

  if (
    status === 'Preparando'
    || status === 'Em Trânsito'
    || status === 'Entregue'
  ) {
    return next();
  }

  return res.status(StatusCodes.NOT_FOUND).json({ message: 'Incorrect Status' });
};

module.exports = validateUpdateSale; 