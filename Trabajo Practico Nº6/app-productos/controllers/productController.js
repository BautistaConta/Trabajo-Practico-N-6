const express = require('express');
const router = express.Router();
const service = require('../services/productService');

router.get('/productos', (req, res) => res.json(service.listProducts()));

router.post('/productos', (req, res) => {
  const nuevo = service.createProduct(req.body);
  res.status(201).json(nuevo);
});

router.put('/productos/:id', (req, res) => {
  const actualizado = service.editProduct(Number(req.params.id), req.body);
  res.json(actualizado);
});

router.delete('/productos/:id', (req, res) => {
  service.deleteProduct(Number(req.params.id));
  res.sendStatus(204);
});

module.exports = router;
