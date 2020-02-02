const router = require("express").Router({ mergeParams: true });
const Experience = require("./experience-model.js");
const { validateAdmin } = require("../../auth/config/auth-middleware.js");

router.post("/", validateAdmin, validatePost, (req, res) => {
  Experience.add({ ...req.body, prisoner_id: req.params.prisonerid })
    .then(result => {
      res.status(201).json(result);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.put("/:experienceid", validateAdmin, (req, res) => {
  Experience.update(req.body, req.params.experienceid)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.delete("/:experienceid", validateAdmin, (req, res) => {
  Experience.remove(req.params.experienceid)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

//Middleware to check post
function validatePost(req, res, next) {
  if (req.body && req.body.description && req.body.date) {
    next();
  } else {
    res.status(400).json({
      error:
        "Missing necessary information. Ensure you are sending a description AND a date- both are strings/text."
    });
  }
}

module.exports = router;
