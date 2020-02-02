const router = require("express").Router({ mergeParams: true });
const Experience = require("./experience-model.js");

router.post("/", (req, res) => {
  Experience.add({ ...req.body, prisoner_id: req.prisonerid });
});

module.exports = router;
