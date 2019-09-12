const express = require('express');
 
const controller = require('./clients.controller.js');
const router = express.Router();
  
router.post('/create', controller.create);
router.get('/getAll', controller.getAll);
router.get('/getOne/:id', controller.getOne);
router.get('/getByName/:name', controller.getByName);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);
router.post('/sendMail', controller.sendMail);

module.exports = router;
 