const bcrypt = require("bcryptjs");
const genSecretPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
module.exports = {
  genSecretPassword,
};