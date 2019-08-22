const express = require('express');
 
const controller = require('./projects.controller');
const router = express.Router();
  
router.post('/create', controller.create);
router.get('/getProjs', controller.getAll);
router.get('/getOne/:id', controller.getOne);
router.get('/oneToGantt/:id', controller.oneToGantt);
router.put('/update/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
