module.exports = {
  validatePrison,
  validatePrisonTypes
};

function validatePrison(req, res, next) {
  if (req.body && req.body.name && req.body.address && req.body.zipcode) {
    next();
  } else {
    res.status(400).json({ error: "Missing required information to post." });
  }
}

function validatePrisonTypes(req, res, next) {
  if (
    typeof req.body.name === "string" &&
    typeof req.body.address === "string" &&
    typeof req.body.zipcode === "number"
  ) {
    next();
  } else {
    res
      .status(400)
      .json({ error: "Some of your fields are using the wrong data type." });
  }
}
