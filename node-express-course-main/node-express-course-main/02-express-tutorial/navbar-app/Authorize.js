const Authorize = (req, res, next) => {
  const { user } = req.query;
  console.log(user);
  if (user === "testUser") {
    req.user = { user: "testUser" };
    next();
  } else {
    res.status(401).end("not Authorized");
  }
};
module.exports = Authorize;
