const express = require("express");
//the following enables the router
const router = express.Router();
//to get access to data
let { people } = require("../data");

router.get("/", (req, res) => {
  res.json(people);
  res.end;
});
router.get("/names", (req, res) => {
  const singleNames = people.map((eachPerson) => {
    const { name } = eachPerson;
    return { name };
  });
  res.json(singleNames);
});

module.exports = router;
