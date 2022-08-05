const md5 = require('md5');

const translateMd5 = async (message) => md5(message);

module.exports = translateMd5;
