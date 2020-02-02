const router = require("express").Router();
const Prisons = require("./prison-model.js");

//*** Middleware vv ***
const { validateAdmin } = require("../auth/config/auth-middleware");
const {
  validatePrisoner,
  validatePrisonerTypes
} = require("../prisoners/middleware/prisoner-middleware.js");
const {
  validatePrison,
  validatePrisonTypes
} = require("./middleware/prison-middleware");
// *** Middleware ^^ ***

const Prisoners = require("../prisoners/prisoner-model.js");
const prisonerRouter = require("../prisoners/prisoner-router.js");

router.use("/:id/prisoners/:prisonerid", prisonerRouter);

// PRISON ROUTES DEFINED BELOW (scroll further for routes for /prisoners- any requiring prisoner id will be routed to prisonerRouter)
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

// BASE PRISONER ROUTES BELOW (no id needed)

router.get("/:id/prisoners", (req, res) => {
  Prisoners.get(req.params.id)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.post("/:id/prisoners", validateAdmin, (req, res) => {
  Prisoners.add({ ...req.body, prison_id: req.params.id })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

module.exports = router;
