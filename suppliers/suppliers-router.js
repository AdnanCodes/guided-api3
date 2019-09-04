const express = require("express");

const router = express.Router();

//Router can use middleware
router.use(express.json());

function uppercaser(req, res, next) {
  let name = req.params.name;

  if (name) {
    req.name = name.toUpperCase();
  }
  next();
}

router.get("/", (req, res) => {
  res.send("Get to /suppliers/");
});

router.get("/:name", uppercaser, (req, res) => {
  const { name } = req.params;
  res.send(`get to /suppliers/${req.name}`);
});

module.exports = router;
