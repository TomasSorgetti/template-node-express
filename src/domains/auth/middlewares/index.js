module.exports = {
  ...require('./login.middleware'),
  ...require('./register.middleware'),
  ...require('./jwtAuth.middleware'),
};
