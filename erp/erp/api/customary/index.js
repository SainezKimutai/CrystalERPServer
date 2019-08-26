const express = require('express');
 
const controller = require('./customary.controller.js');
const router = express.Router();
  
router.post('/create', controller.create);
router.get('/getAll', controller.getAll);
router.delete('/:id', controller.delete);

module.exports = router;
