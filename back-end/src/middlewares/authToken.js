const { StatusCodes } = require('http-status-codes');
const { readFileSync } = require('fs');
const jwt = require('jsonwebtoken');
const { user } = require('../database/models');

const jwtSecret = readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const authToken = async (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) return res.status(StatusCodes.FORBIDDEN).json({ message: 'A token is required' });

  try {
    const decoded = jwt.decode(token, jwtSecret);
    const verify = await user.findOne({ where: { email: decoded.payload.email } });
    if (!verify) return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  } catch (Error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
  next();
};

module.exports = authToken;
