var express = require('express');
 
var controller = require('./projects.controller');
var router = express.Router();
  
router.get('/', controller.getMany);
router.get('/:id', controller.getOne);
router.post('/', controller.add);
router.post('/:id', controller.edit);
router.delete('/:id', controller.delete);

module.exports = router;