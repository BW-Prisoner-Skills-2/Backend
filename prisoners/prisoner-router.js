const router = require("express").Router({ mergeParams: true });
const Prisoners = require("./prisoner-model.js");
const { validateAdmin } = require("../auth/config/auth-middleware.js");
const {
  validatePrisoner,
  validatePrisonerTypes
} = require("../prisoners/middleware/prisoner-middleware.js");

const skillsRouter = require("./skills/skills-router.js");
const experienceRouter = require("./experience/experience-router.js");

const Skills = require("./skills/skills-model.js");

router.use("/:prisonerid/skills", skillsRouter);
router.use("/:prisonerid/experience", experienceRouter);

router.get("/", (req, res) => {
  Prisoners.get(req.params.id)
    .then(prisoners => {
      res.status(200).json(prisoners);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.post("/", validateAdmin, (req, res) => {
  Prisoners.add({ ...req.body, prison_id: req.params.id })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.get("/:prisonerid", (req, res) => {
  Prisoners.getById(req.params.prisonerid)
    .then(result => {
      if (result) {
        res.status(200).json(result);
      } else {
        res
          .status(404)
          .json({ error: "Could not find prisoner with specified ID." });
      }
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.put("/:prisonerid", (req, res) => {
  Prisoners.update(req.body, req.params.prisonerid)
    .then(result => {
      if (result) {
        res.status(200).json(result);
      } else {
        res
          .status(404)
          .json({ error: "Could not find prisoner with specified ID." });
      }
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.delete("/:prisonerid", (req, res) => {
  Prisoners.remove(req.params.prisonerid)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

module.exports = router;
