const express = require('express');
 
const controller = require('./teams.controller');
const router = express.Router();
  
router.post('/create', controller.create);
router.get('/getTeams', controller.getAll);
router.delete('/:id', controller.delete);

module.exports = router;