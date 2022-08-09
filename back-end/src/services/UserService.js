const { user } = require('../database/models');
const generateToken = require('../utils/generateToken');
const translateMd5 = require('../utils/translateMd5');

const login = async (obj) => {
  const { email, password } = obj;
  const verify = await user.findOne({ where: { email } });
  const translated = await translateMd5(password);

  if (!verify || verify.password !== translated) throw new Error('Invalid fields');

  return {
    name: verify.name,
    email: verify.email,
    role: verify.role,
    token: generateToken({ email }),
  };
};

const register = async (obj) => {
  const { name, email, password } = obj;
  const verifyEmail = await user.findOne({ where: { email } });
  const verifyName = await user.findOne({ where: { name } });
  const translated = await translateMd5(password);
  const role = 'customer';

  if (verifyEmail || verifyName) throw new Error('User already registered');

  await user.create({ name, email, password: translated, role });

  return {
    name,
    email,
    role,
    token: generateToken({ email }),
  };
};

module.exports = { login, register };
