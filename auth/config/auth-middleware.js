const { jwtSecret } = require("./jwt.js");
const jwt = require("jsonwebtoken");

module.exports = {
  validateBody,
  validateAdmin
};

function validateBody(req, res, next) {
  if (req.body && req.body.username && req.body.password) {
    next();
  } else {
    res.status(400).json({ error: "You are missing required fields." });
  }
}

function validateAdmin(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({
          error:
            "Token error. Check your request header (it will be in your axiosWithAuth function), if it looks fine- contact backend."
        });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({
      error: "Not authorized. Psst, try logging in."
    });
  }
}
