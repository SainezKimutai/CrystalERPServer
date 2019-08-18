const express = require('express');
 
const controller = require('./salesCategory.controller.js');
const router = express.Router();
  
router.post('/create', controller.create);
router.get('/getCategory', controller.getAll);
router.get('/getOne/:id', controller.getOne);
router.put('/update/:id', controller.update);
router.delete('/:id', controller.delete);


module.exports = router;