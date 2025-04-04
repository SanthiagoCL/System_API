const express = require('express');
const router = express.Router();
const testController = require('../Controllers/testController');



router.get('/test', testController.testeGet);
router.get('/check', testController.validarGet);

router.post('/verificar', testController.testePost);
router.post('/atualizar', testController.validarPost);

router.put('/verificar', testController.testePut);
router.put('/atualizar', testController.validarPut);

module.exports = router;