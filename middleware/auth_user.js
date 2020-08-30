module.exports = (req, res, next) => {
  if (!!req.username) {
    req.isAuth = true;
  } else {
    req.isAuth = false;
  }
  return next();
};
