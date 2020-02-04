module.exports = {
  validatePrisoner
};

function validatePrisoner(req, res, next) {
  if (req.body && req.body.name && typeof req.body.can_leave === "boolean") {
    next();
  } else {
    res
      .status(400)
      .json({
        error:
          "Form missing a required input or receive wrong data type for an input. Check schema."
      });
  }
}
