const router = require("express").Router();
const Prisons = require("./prison-model.js");

//*** Middleware vv ***
const { validateAdmin } = require("../auth/config/auth-middleware");
const {
  validatePrison,
  validatePrisonTypes
} = require("./middleware/prison-middleware");
// *** Middleware ^^ ***

const prisonerRouter = require("../prisoners/prisoner-router.js");

router.use("/:id/prisoners", prisonerRouter);

router.get("/", (req, res) => {
  Prisons.get()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.post(
  "/",
  validateAdmin,
  validatePrison,
  validatePrisonTypes,
  (req, res) => {
    Prisons.add(req.body)
      .then(result => {
        res.status(201).json(result);
      })
      .catch(error => {
        res.status(500).json(error.message);
      });
  }
);

router.put("/:id", validateAdmin, (req, res) => {
  Prisons.update(req.body, req.params.id)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.delete("/:id", validateAdmin, (req, res) => {
  Prisons.remove(req.params.id)
    .then(result => {
      res.status(200).json({ result });
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

module.exports = router;
