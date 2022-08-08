const jwt = require('jsonwebtoken');

const secret = 'secret_key';

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  const token = jwt.sign({ data: payload }, secret, jwtConfig);

  return token;
};

module.exports = generateToken;
