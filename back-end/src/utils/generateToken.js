const { readFileSync } = require('fs');
const jwt = require('jsonwebtoken');

const jwtSecret = readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  const token = jwt.sign({ payload }, jwtSecret, jwtConfig);

  return token;
};

module.exports = generateToken;
