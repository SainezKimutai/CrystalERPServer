const express = require('express');
 
const controller = require('./userSalesStages.controller');
const router = express.Router();
  
router.post('/create', controller.create);
router.get('/getAll', controller.getAll);
router.get('/getOne/:id', controller.getOne);
router.get('/getByUser/:id', controller.getByUser);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;
