module.exports = (req, res, next) => {
  if (!!req.username) {
    req.isAuth = true;
  } else {
    req.isAuth = false;
  }
  console.log("auth_middleware from spl220");
  return next();
};
