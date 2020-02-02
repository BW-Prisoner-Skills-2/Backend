const router = require("express").Router();
const Prisons = require("./prison-model.js");
const { validateAdmin } = require("../auth/config/auth-middleware");
const {
  validatePrison,
  validateTypes
} = require("./middleware/prison-middleware");

router.get("/", (req, res) => {
  Prisons.get()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.post("/", validateAdmin, validatePrison, validateTypes, (req, res) => {
  Prisons.add(req.body)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.put("/:id", validateAdmin, (req, res) => {
  Prisons.update(req.body, req.params.id)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.del("/:id", validateAdmin, (req, res) => {
  Prisons.remove(req.params.id)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

module.exports = router;
