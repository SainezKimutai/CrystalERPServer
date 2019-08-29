var express = require('express');
 
var controller = require('./users.controller');
var router = express.Router();
  
router.get('/getAll', controller.getAll);
router.get('/:id', controller.getOne);
router.post('/login', controller.login);
router.post('/register', controller.create);
router.post('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
