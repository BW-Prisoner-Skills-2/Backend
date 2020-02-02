const router = require("express").Router();
const Prisoners = require("./prisoner-model.js");

router.get("/", (req, res) => {
  console.log(req.originalUrl);
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

router.put("/", (req, res) => {
  Prisoners.update(req.params.prisonerid)
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

router.delete("/", (req, res) => {
  Prisoners.remove(req.params.prisonerid)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

module.exports = router;
