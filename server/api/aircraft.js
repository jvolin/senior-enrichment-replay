const express = require('express');
const router = new express.Router();
const models = require('../db/models');
const Country = models.Country;
const Aircraft = models.Aircraft
module.exports = router;

router.get('/', function (req, res, next) {
  Aircraft.findAll({
    include: [{ model: Country, attributes: ['name']}],
  })
  .then(aircraft => res.json(aircraft))
  .catch(next);
});

router.get('/:id', function (req, res, next) {
  Aircraft.findOne({ where: { id: req.params.id },
    include: [{ model: Country, attributes: ['name']}],
  })
  .then(country => res.json(country))
  .catch(next);
});
