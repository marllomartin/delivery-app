const { user } = require('../database/models');
const generateToken = require('../utils/generateToken');
const translateMd5 = require('../utils/translateMd5');

const login = async (email, password) => {
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

module.exports = { login };
