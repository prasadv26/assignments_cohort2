// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  try {
    const usertype = req.headers["username"];
    if (usertype !== "admin@app1.com")
      return res.status(403).send("You are not allowed to see this page");
    next();
  } catch (error) {
    res.status(500).send("Error : ", error);
  }
}

module.exports = adminMiddleware;
