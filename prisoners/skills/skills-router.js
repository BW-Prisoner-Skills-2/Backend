const router = require("express").Router({ mergeParams: true });
const Skills = require("./skills-model.js");
const { validateAdmin } = require("../../auth/config/auth-middleware.js");

router.post("/", validateAdmin, validatePost, (req, res) => {
  Skills.add({
    ...req.body,
    prisoner_id: req.params.prisonerid
  })
    .then(result => {
      res.status(201).json(result);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.put("/:skillid", validateAdmin, (req, res) => {
  Skills.update(req.body, req.params.skillid)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.delete("/:skillid", validateAdmin, (req, res) => {
  Skills.remove(req.params.skillid)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

//Middleware to check post
function validatePost(req, res, next) {
  if (req.body && req.body.description) {
    next();
  } else {
    res.status(400).json({
      error:
        "Missing necessary information. Ensure you are sending a description- it is a string/text."
    });
  }
}

module.exports = router;
