const express = require('express');
const router = express.Router();
const service = require('../services/personService');

router.get('/personas', (req, res) => res.json(service.listPeople()));
router.post('/personas', (req, res) => res.status(201).json(service.createPerson(req.body)));
router.put('/personas/:id', (req, res) => res.json(service.editPerson(Number(req.params.id), req.body)));
router.delete('/personas/:id', (req, res) => {
  service.deletePerson(Number(req.params.id));
  res.sendStatus(204);
});

module.exports = router;
