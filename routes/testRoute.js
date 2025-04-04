const express = require('express');
const router = express.Router();
const testController = require('../Controllers/testController');



router.get('/test', testController.teste);
router.get('/check', testController.validar);

router.post('/verificar', testController.verificar);
router.post('/atualizar', testController.atualizar);

module.exports = router;