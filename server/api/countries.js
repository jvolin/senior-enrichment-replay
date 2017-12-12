'use strict'

const express = require('express');
const router = new express.Router();
const models = require('../db/models');
const Country = models.Country;
const Aircraft = models.Aircraft
module.exports = router;

//get all countries including their aircrafts
router.get('/', function (req, res, next) {
  Country.findAll({ include: [Aircraft]
  })
  .then(country => res.json(country))
  .catch(next);
});

//get top five countries
router.get('/getfive', function (req, res, next) {
  console.log('hi')
  Country.getTopFive()
  .then(country => res.json(country))
  .catch(next);
});

//get country by id
router.get('/:id', function (req, res, next) {
  Country.findOne({ where: { id: req.params.id },
    include: [{model: Aircraft, attributes: ['make', 'model', 'year', 'type', 'cost', 'imageUrl']}],
  })
  .then(country => res.json(country))
  .catch(next);
});

//post country
router.post('/', function (req, res, next) {
  Country.create(req.body)
    .then(country => res.json(country))
    .catch(next);
});

//update a


//delete a country and all associated aircrafts
router.delete('/:id', function (req, res, next) {
  const id = req.params.id;

  Country.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});
