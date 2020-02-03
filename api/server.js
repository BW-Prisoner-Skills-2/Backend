const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/auth-router.js");
const prisonRouter = require("../prisons/prison-router");
const prisonerRouter = require("../prisoners/prisoner-router.js");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use(Logger);

server.get("/api", (req, res) => {
  res.send(`
  <h1>PRISON SKILLS BASE URI</h1>`);
});

server.use("/api/auth", authRouter);
server.use("/api/prisons", prisonRouter);

function Logger(req, res, next) {
  console.log({
    body: req.body,
    uri: req.originalUrl,
    method: req.method
  });
  next();
}

module.exports = server;
