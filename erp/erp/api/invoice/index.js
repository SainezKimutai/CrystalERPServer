const express = require('express');

const controller = require('./invoice.controller.js');
const router = express.Router();

router.post('/create', controller.create);
router.get('/getAll', controller.getAll);
router.get('/getOne/:id', controller.getOne);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);
router.post('/sendInvoice', controller.sendInvoice);
router.post('/upload', controller.upload);
router.delete('/remove/:name', controller.remove);

module.exports = router;
