const { Op } = require('sequelize');
const { user } = require('../database/models');
const generateToken = require('../utils/generateToken');
const translateMd5 = require('../utils/translateMd5');

const registerAdmin = async (obj) => {
  const { name, email, password, role } = obj;
  const verifyEmail = await user.findOne({ where: { email } });
  const verifyName = await user.findOne({ where: { name } });
  const translated = await translateMd5(password);

  if (verifyEmail || verifyName) throw new Error('User already registered');

  await user.create({ name, email, password: translated, role });

  return {
    name,
    email,
    role,
    token: generateToken({ email }),
  };
};

const findAllUsers = async () => {
  const users = await user.findAll({ where: { role: { [Op.not]: 'administrator' } } });
  return users;
};

const deleteUser = async (id) => {
  const verifyUser = await user.findByPk(id);
  if (!verifyUser) return { message: 'User not found' };
  await user.destroy({ where: { id } });
  return { message: `User ${id} successfully deleted` };
};

module.exports = { registerAdmin, findAllUsers, deleteUser };
