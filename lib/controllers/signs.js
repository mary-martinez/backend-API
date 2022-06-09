const { Router } = require('express');
const Sign = require('../models/Signs');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const sign = await Sign.getById(id);
    res.json(sign);
  })
  .get('/', async (req, res) => {
    const signs = await Sign.getAll();
    res.json(signs);
  });
