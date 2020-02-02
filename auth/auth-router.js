const router = require("express").Router();
const validateBody = require("./config/auth-middleware.js");
const bc = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = require("./config/jwt.js");

router.post("/register", validateBody, (req, res) => {
  let admin = req.body;
  const hash = bc.hashSync(admin.password, 10);
  admin.password = hash;

  Admins.add(admin)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.post("/login", validateBody, (req, res) => {
  let { username, password } = req.body;

  Admins.findBy({ username })
    .first()
    .then(admin => {
      if (admin && bc.compareSync(password, admin.password)) {
        const token = signToken(admin);
        res.status(200).json({
          message: `Welcome ${admin.username}`,
          token
        });
      } else {
        res.status(400).json({ error: "Invalid credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

function signToken(admin) {
  const payload = {
    adminId: admin.id,
    username: admin.username
  };
  const options = {
    expiresIn: "8h"
  };
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
