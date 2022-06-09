const { Router } = require('express');
const Sign = require('../models/Signs');

module.exports = Router().get('/', async (req, res) => {
  const signs = await Sign.getAll();
  res.json(signs);
});
