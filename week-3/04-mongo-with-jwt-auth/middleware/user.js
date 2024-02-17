const { User } = require("../db");

async function isExistsUser(username) {
  const isExistsUser = await User.findOne({ username });
  if (!isExistsUser) return false;
  return true;
}

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.headers["x-auth-token"];
  if (!isExistsUser(username))
    return res.status(404).send("User doesn't exist");
  next();
}

module.exports = userMiddleware;
