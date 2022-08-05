const { user } = require('../database/models');
const translateMd5 = require('../utils/translateMd5');

const testToken = 'SgVkYp3s6v9y$B&E)H@McQfTjWmZq';

const login = async (email, password) => {
  const verify = await user.verifyOne({ where: { email } });
  const translated = await translateMd5(password);

  if (!verify || verify.password !== translated) throw new Error('Invalid fields');

  return { token: testToken };
};

module.exports = { login };
