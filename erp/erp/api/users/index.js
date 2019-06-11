var express = require('express');
 
var controller = require('./users.controller');
var router = express.Router();
  
router.get('/', controller.getMany);
router.get('/:id', controller.getOne);
router.post('/login', controller.login);
router.post('/', controller.add);
router.post('/:id', controller.edit);
router.delete('/:id', controller.delete);

module.exports = router;
